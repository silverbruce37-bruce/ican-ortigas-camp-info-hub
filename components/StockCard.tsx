import React, { useState } from 'react';
import { X, TrendingUp, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const StockCard: React.FC<StockCardProps> = ({ symbol, name, price, change }) => {
  const [tradeMode, setTradeMode] = useState<'buy' | 'sell' | null>(null);
  const [quantity, setQuantity] = useState<string>('1');

  const isPositive = change >= 0;
  const numQuantity = parseInt(quantity) || 0;
  const total = numQuantity * price;

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (numQuantity <= 0) return;
    alert(`Order Initiated: ${tradeMode?.toUpperCase()} ${numQuantity} shares of ${symbol} at $${price}\nTotal: $${total.toFixed(2)}`);
    setTradeMode(null);
    setQuantity('1');
  };

  return (
    <>
      <div className="bg-[#2C2C2E] p-5 rounded-2xl w-full max-w-[300px] flex flex-col justify-between h-[160px] shadow-lg cursor-pointer transition-transform hover:scale-[1.02]">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-bold text-white text-xl tracking-tight">{symbol}</div>
            <div className="text-[13px] font-medium text-gray-400 truncate max-w-[120px]">{name}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-white font-semibold text-lg">${price.toFixed(2)}</div>
            <div className={`text-[13px] font-medium px-2 py-0.5 rounded-md mt-1 ${isPositive ? 'bg-[#30D158] text-white' : 'bg-[#FF453A] text-white'}`}>
              {isPositive ? '+' : ''}{change}%
            </div>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <button
            onClick={() => setTradeMode('buy')}
            className="bg-[#3A3A3C] hover:bg-[#48484A] text-[#0A84FF] font-semibold py-2 rounded-xl text-[13px] transition-colors"
          >
            Buy
          </button>
          <button
            onClick={() => setTradeMode('sell')}
            className="bg-[#3A3A3C] hover:bg-[#48484A] text-[#0A84FF] font-semibold py-2 rounded-xl text-[13px] transition-colors"
          >
            Sell
          </button>
        </div>
      </div>

      {/* Trade Modal - iOS Sheet Style */}
      <AnimatePresence>
        {tradeMode && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center sm:p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#1C1C1E] w-full max-w-sm rounded-t-3xl md:rounded-3xl shadow-2xl p-6 relative text-white"
            >
              <div className="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mb-6 md:hidden"></div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">{tradeMode === 'buy' ? 'Buy' : 'Sell'} {symbol}</h3>
                  <p className="text-gray-400 text-sm">{name}</p>
                </div>
                <button
                  onClick={() => setTradeMode(null)}
                  className="bg-[#3A3A3C] rounded-full p-2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleTrade}>
                <div className="bg-[#2C2C2E] rounded-xl p-4 mb-4 flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Price</span>
                  <span className="font-semibold text-lg">${price.toFixed(2)}</span>
                </div>

                <div className="bg-[#2C2C2E] rounded-xl p-4 mb-6 flex justify-between items-center">
                  <span className="text-gray-400 font-medium">Shares</span>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-24 bg-transparent text-right font-semibold text-xl focus:outline-none text-[#0A84FF]"
                  />
                </div>

                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-gray-400">Total Estimated</span>
                  <span className="font-bold text-2xl">${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0A84FF] text-white font-semibold rounded-2xl text-[17px] active:scale-[0.98] transition-transform"
                >
                  Confirm
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StockCard;