import React, { useEffect, useRef } from 'react';

// INLINED DATA TO PREVENT IMPORT CRASHES
interface WaymakerNode {
    id: string;
    title: string;
    category: '다큐멘터리' | '방송' | '쇼츠' | '에세이' | '비전' | 'TED';
    tags: string[];
    thumbnail: string;
    desc: string;
    duration: string;
    date: string;
    student?: string;
    videoUrl: string;
    x: number;
    y: number;
    z: number;
}

const waymakerNodes: WaymakerNode[] = [
    {
        id: 'kwon-soo-a-happiness',
        title: "행복은 선물인가, 재능인가?",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#행복', '#관점', '#재능', '#철학', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "우리가 느끼는 행복은 타고나는 것일까요, 아니면 훈련할 수 있는 근육일까요? 행복에 대한 깊이 있는 통찰.",
        duration: "04:12",
        date: "2024.10.15",
        videoUrl: "PtIN1fFSeJs",
        x: 0, y: 0, z: 0
    },
    {
        id: 'kwon-soo-a-animals',
        title: "문화적 삶: 동물 vs 인간",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#문화', '#생물학', '#관점', '#과학'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "동물과 인간의 사회적 구조와 문화적 행동을 비교하며, 우리 삶의 본질을 탐구합니다.",
        duration: "05:10",
        date: "2024.11.02",
        videoUrl: "pXwjQGfDyWM",
        x: -25, y: 15, z: 10
    },
    {
        id: 'kim-joi-table-tennis',
        title: "탁구의 놀라운 세계",
        student: "김조이 (Kim Joi)",
        category: '방송',
        tags: ['#스포츠', '#열정', '#기술', '#몰입', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "탁구공 회전에 숨겨진 물리학과, 그 안에 담긴 뜨거운 열정을 이야기합니다.",
        duration: "03:30",
        date: "2024.09.20",
        videoUrl: "HtLG95LIAQw",
        x: 25, y: -10, z: -15
    },
    {
        id: 'lee-soo-eun-interview',
        title: "2025 겨울방학 파이널 인터뷰",
        student: "이수은 (Lee Soo Eun)",
        category: '비전',
        tags: ['#성장', '#인터뷰', '#미래리더', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "지난 겨울 캠프 동안 겪은 도전과 성장의 이야기, 그리고 미래를 향한 다짐.",
        duration: "04:00",
        date: "2025.02.01",
        videoUrl: "seOAHUY5kXI",
        x: 10, y: -25, z: 20
    },
    {
        id: 'ted-cinematic-benchmark',
        title: "미래의 수사학 (시네마틱 벤치마크)",
        student: "다니엘 팀 (Daniel Team)",
        category: '다큐멘터리',
        tags: ['#시네마틱', '#수사학', '#퀄리티', '#미래리더'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "학생 영상 제작의 기준점이 되는 고품질 시네마틱 영상. 말의 질감과 깊이를 시각화하다.",
        duration: "06:00",
        date: "2026.02.02",
        videoUrl: "PtIN1fFSeJs",
        x: -15, y: 30, z: -10
    }
];

interface Props {
    selectedTag: string | null;
    onNodeClick: (node: any) => void;
}

const WaymakerCanvas: React.FC<Props> = ({ selectedTag, onNodeClick }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tagRef = useRef(selectedTag);
    tagRef.current = selectedTag;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let rotation = 0;
        let mouseX = 0;
        let mouseY = 0;
        let hoveredNode: WaymakerNode | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleClick = () => {
            if (hoveredNode) {
                onNodeClick(hoveredNode);
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
        window.addEventListener('resize', resize);
        resize();

        const links: { source: WaymakerNode, target: WaymakerNode }[] = [];
        waymakerNodes.forEach((n1, i) => {
            waymakerNodes.slice(i + 1).forEach(n2 => {
                const shared = n1.tags.filter(t => n2.tags.includes(t));
                if (shared.length > 0) {
                    links.push({ source: n1, target: n2 });
                }
            });
        });

        const render = () => {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            rotation += 0.002;
            const currentTag = tagRef.current;
            hoveredNode = null;

            const project = (x: number, y: number, z: number) => {
                const cos = Math.cos(rotation);
                const sin = Math.sin(rotation);
                const rotX = x * cos - z * sin;
                const rotZ = x * sin + z * cos;
                const scale = 800 / (800 + rotZ * 10);
                return {
                    x: centerX + rotX * 10 * scale,
                    y: centerY + y * 10 * scale,
                    scale: scale,
                    z: rotZ,
                    isVisible: scale > 0
                };
            };

            links.forEach(link => {
                const isHighlighed = currentTag
                    ? (link.source.tags.includes(currentTag) && link.target.tags.includes(currentTag))
                    : false;
                if (currentTag && !isHighlighed) return;

                const p1 = project(link.source.x, link.source.y, link.source.z);
                const p2 = project(link.target.x, link.target.y, link.target.z);
                if (!p1.isVisible || !p2.isVisible) return;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = isHighlighed ? 'rgba(96, 165, 250, 0.8)' : 'rgba(59, 130, 246, 0.1)';
                ctx.lineWidth = isHighlighed ? 2 : 0.5;
                ctx.stroke();
            });

            waymakerNodes.forEach(node => {
                // SATELLITE & SHOOTING STAR LOGIC (SYNCED)
                if (node.type === 'satellite') {
                    const targetNode = waymakerNodes.find(n => n.id === node.orbitTarget);
                    if (targetNode) {
                        const time = Date.now() * 0.001;
                        const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
                        const angle = (time * 0.015) + offset;
                        node.x = targetNode.x + Math.cos(angle) * 60;
                        node.z = targetNode.z + Math.sin(angle) * 60;
                        node.y = targetNode.y + Math.sin(time * 0.3) * 10;
                    }
                } else if (node.type === 'shooting-star') {
                    const time = Date.now() * 0.00056;
                    const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const a = 50 + (offset % 30);
                    const b = 15 + (offset % 10);
                    const angle = time + offset;
                    node.x = Math.cos(angle) * a;
                    node.z = Math.sin(angle) * b;
                    node.y = (Math.cos(angle) * a * 0.2);
                }

                const p = project(node.x, node.y, node.z);
                if (!p.isVisible) return;

                const isSelected = currentTag ? node.tags.includes(currentTag) : true;
                const isHovered = Math.abs(p.x - mouseX) < 20 && Math.abs(p.y - mouseY) < 20;
                if (isHovered) hoveredNode = node;

                ctx.save();
                ctx.translate(p.x, p.y);
                const baseSize = ((isSelected ? 4 : 2) + (isHovered ? 3 : 0)) * p.scale;

                if (node.type === 'spaceship') {
                    const s = baseSize * 2.5;
                    ctx.fillStyle = isSelected || isHovered ? '#22d3ee' : '#0e7490';
                    ctx.beginPath();
                    ctx.moveTo(0, -s); ctx.lineTo(s * 0.8, s); ctx.lineTo(0, s * 0.7); ctx.lineTo(-s * 0.8, s);
                    ctx.closePath();
                    ctx.fill();
                } else if (node.type === 'shooting-star') {
                    const time = Date.now() * 0.00056;
                    const offset = node.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const angle = time + offset;
                    const tx = Math.sin(angle) * 20;
                    const ty = -Math.cos(angle) * 10;
                    const grad = ctx.createLinearGradient(0, 0, tx, ty);
                    grad.addColorStop(0, '#fef08a'); grad.addColorStop(1, 'transparent');
                    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(tx, ty); ctx.strokeStyle = grad; ctx.lineWidth = 4 * p.scale; ctx.stroke();
                    ctx.beginPath(); ctx.arc(0, 0, baseSize * 1.8, 0, Math.PI * 2); ctx.fillStyle = '#fef08a'; ctx.fill();
                } else {
                    let color = isSelected || isHovered ? '#60a5fa' : '#475569';
                    if (node.isHoly) color = '#F59E0B';
                    // @ts-ignore
                    else if (node.isNew) color = '#fbbf24';
                    ctx.beginPath();
                    ctx.arc(0, 0, baseSize, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    if (isSelected || isHovered || node.isHoly) {
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = color;
                    }
                    ctx.fill();
                }
                ctx.restore();

                if (p.scale > 0.8 || isSelected || isHovered) {
                    ctx.fillStyle = isSelected || isHovered ? 'white' : 'rgba(255,255,255,0.5)';
                    ctx.font = isSelected || isHovered ? 'bold 12px sans-serif' : '10px sans-serif';
                    ctx.fillText((node.isHoly ? "✝ " : (node.type === 'spaceship' ? "🛸 " : "")) + (node.student || node.title.split('(')[0]), p.x + 12, p.y + 4);
                }
            });

            canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default WaymakerCanvas;
