import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { ACADEMY_INFO } from '../constants';
import { LivingInfoItem } from '../types';
import { Rocket, Hospital, ShoppingBag, Home, Utensils, Wifi, Dumbbell, Church, Carrot } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix Leaflet Default Icon Issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface OrtigasMapProps {
  items: LivingInfoItem[];
  activeCategory: string;
}

// Component to handle auto-zooming/centering
const MapBoundsUpdater: React.FC<{ items: LivingInfoItem[], center: { lat: number, lng: number } }> = ({ items, center }) => {
  const map = useMap();

  useEffect(() => {
    // Force a resize calculation to ensure tiles load correctly (fixes "halfway" map issue)
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    if (items.length > 0) {
      const markers = items.map(item => [item.coordinates!.lat, item.coordinates!.lng] as [number, number]);
      // Include Academy Center
      markers.push([center.lat, center.lng]);

      const bounds = L.latLngBounds(markers);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    } else {
      map.setView([center.lat, center.lng], 16);
    }
  }, [items, center, map]);

  return null;
};

const OrtigasMap: React.FC<OrtigasMapProps> = ({ items, activeCategory }) => {
  const center = ACADEMY_INFO.coordinates; // Strata 100

  // Filter items that have coordinates
  const validItems = items.filter(item => item.coordinates);

  // Create Custom Icons using Lucide React rendered to HTML string
  const createCustomIcon = (category: string) => {
    let IconComponent = Rocket;
    let colorClass = 'bg-blue-600';

    switch (category) {
      case 'academy': IconComponent = Rocket; colorClass = 'bg-ican-600'; break;
      case 'medical': IconComponent = Hospital; colorClass = 'bg-rose-500'; break;
      case 'shopping': IconComponent = ShoppingBag; colorClass = 'bg-purple-500'; break;
      case 'grocery': IconComponent = Carrot; colorClass = 'bg-green-600'; break; // Added grocery
      case 'rent': IconComponent = Home; colorClass = 'bg-indigo-500'; break;
      case 'food': IconComponent = Utensils; colorClass = 'bg-orange-500'; break;
      case 'mobile': IconComponent = Wifi; colorClass = 'bg-sky-500'; break;
      case 'activity': IconComponent = Dumbbell; colorClass = 'bg-emerald-500'; break;
      case 'church': IconComponent = Church; colorClass = 'bg-slate-500'; break;
      case 'korean_church': IconComponent = Church; colorClass = 'bg-cyan-600'; break;
    }

    const iconHtml = renderToStaticMarkup(
      <div className={`w-8 h-8 rounded-full ${colorClass} text-white flex items-center justify-center shadow-lg border-2 border-white`}>
        <IconComponent className="w-4 h-4" />
      </div>
    );

    return L.divIcon({
      html: iconHtml,
      className: 'custom-leaflet-icon', // Empty class to remove default box
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
  };

  return (
    <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 z-10 relative">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Auto-updater for bounds */}
        <MapBoundsUpdater items={validItems} center={center} />

        {/* Academy Marker (Always Visible) */}
        <Marker
          position={[center.lat, center.lng]}
          icon={createCustomIcon('academy')}
        >
          <Popup>
            <div className="font-bold text-center">
              <div className="text-ican-600 mb-1">ICAN ACADEMY</div>
              <div className="text-xs text-gray-500">Strata 100</div>
            </div>
          </Popup>
          <Tooltip direction="bottom" offset={[0, 10]} opacity={1} permanent>
            <span className="font-bold text-ican-800 text-xs">ICAN CAMP</span>
          </Tooltip>
        </Marker>

        {/* Living Info Markers */}
        {validItems.map((item, idx) => (
          <Marker
            key={idx}
            position={[item.coordinates!.lat, item.coordinates!.lng]}
            icon={createCustomIcon(item.category)}
          >
            <Popup>
              <div className="min-w-[150px]">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600 mb-1 inline-block">{item.category}</span>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.location}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay Legend */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg text-xs grid grid-cols-2 gap-x-4 gap-y-1">
        <div className="font-bold mb-1 text-gray-500 uppercase col-span-2">Map Legend</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-ican-600"></div> ICAN Academy</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500"></div> Condo / Rent</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-600"></div> Grocery</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div> Food</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div> Shopping</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Activity</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-rose-500"></div> Hospital</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-sky-500"></div> Mobile</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-600"></div> Church</div>
      </div>
    </div>
  );
};

export default OrtigasMap;