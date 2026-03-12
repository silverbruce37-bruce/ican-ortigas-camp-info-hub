import React from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  UserPlus,
  FlaskConical,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Database,
  MousePointerClick,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.5, delay },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: '01',
    icon: Lock,
    color: 'from-violet-500 to-indigo-600',
    badge: '보안 접속 단계',
    title: '비밀번호 인증',
    description:
      '캠프 등록이 확정된 학부모/학생에게 개별 부여된 전용 비밀번호를 입력해야만 정보 입력 창이 활성화됩니다.',
    bullets: [
      '개인정보 보호를 위한 1:1 전용 비밀번호',
      '허수 등록 완전 방지 시스템',
      '로그인 없이도 간편한 1회성 인증',
    ],
  },
  {
    number: '02',
    icon: UserPlus,
    color: 'from-sky-500 to-cyan-600',
    badge: '학생 사전 정보 입력',
    title: 'Data Entry & 학생 ID 발급',
    description:
      '학생의 기본 인적 사항, 건강 상태, 특이사항 등 필요한 필드에 데이터를 입력합니다. 입력 완료와 동시에 고유한 학생 ID가 자동으로 발급됩니다.',
    bullets: [
      '인적 사항 · 건강 상태 · 특이사항 필드',
      '시스템이 자동으로 고유 학생 ID 생성',
      '생성된 ID 클릭 한 번으로 테스트 진행',
    ],
  },
  {
    number: '03',
    icon: FlaskConical,
    color: 'from-emerald-500 to-teal-600',
    badge: '레벨 & 성향 테스트',
    title: 'Two-Step Test',
    description:
      '발급된 학생 ID를 클릭하면 전용 링크를 통해 두 가지 필수 테스트가 차례로 진행됩니다.',
    bullets: [],
    twoStep: [
      {
        step: 'Step 1',
        title: '맞춤형 영어 레벨 테스트 (MAP Test 방식)',
        desc: '학년과 실력에 따라 난이도가 조절되는 적응형(Adaptive) 온라인 테스트입니다. 단순 점수가 아닌 실제 MAP Test 알고리즘으로 정확한 위치를 진단합니다.',
      },
      {
        step: 'Step 2',
        title: '학습 성향 및 잠재력 심리테스트',
        desc: '아이의 러닝 성향(Learning Style)과 숨겨진 잠재 능력치를 분석합니다. 캠프 기간 중 개별 맞춤형 케어를 위한 기초 자료로 활용됩니다.',
      },
    ],
  },
];

const BENEFITS = [
  {
    icon: Database,
    title: '데이터 기반 관리',
    desc: '캠프 시작 전 학생의 실력과 성향을 미리 파악하여 최적의 반 배정 및 학습 전략 수립이 가능합니다.',
  },
  {
    icon: MousePointerClick,
    title: '사용자 편의성',
    desc: 'ID 클릭 한 번으로 복잡한 테스트 링크 접속 과정을 단순화했습니다. 누구나 쉽게 진행할 수 있습니다.',
  },
  {
    icon: ShieldCheck,
    title: '보안 & 신뢰성',
    desc: '전용 비밀번호 인증으로 허가된 학생만 접근 가능하며 모든 데이터는 안전하게 처리됩니다.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const CampRegistration: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1d1d1f]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1D1D1F] text-white py-24 px-6">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              ICAN CAMP · 등록 안내
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-5"
          >
            캠프등록
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
              프로세스 안내
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            등록 확정 후 3단계 프로세스를 통해 학생 개개인에게 꼭 맞는 최적의
            캠프 환경을 준비합니다.
          </motion.p>

          <motion.a
            {...fadeUp(0.3)}
            href="https://ican-registration-app.vercel.app/camp-registration.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-white text-[#1d1d1f] font-semibold text-[15px] px-8 py-4 rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            캠프등록 앱 열기
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">3단계 등록 프로세스</h2>
          <p className="text-[#86868b] text-[16px]">
            보안 인증부터 맞춤형 테스트까지, 체계적인 사전 준비 시스템
          </p>
        </motion.div>

        {/* Step connector line (desktop) */}
        <div className="hidden md:block relative mb-12">
          <div className="absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 opacity-40" />
        </div>

        {/* Step Cards */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp(i * 0.12)}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">
                      {step.badge}
                    </div>
                    <div className="text-[22px] font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-400 leading-none">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 leading-snug">{step.title}</h3>

                {/* Description */}
                <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Bullets */}
                {step.bullets.length > 0 && (
                  <ul className="space-y-2 mt-auto">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13px] text-[#444]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Two-Step sub-cards */}
                {step.twoStep && (
                  <div className="mt-4 space-y-3">
                    {step.twoStep.map((ts) => (
                      <div
                        key={ts.step}
                        className="bg-[#F5F5F7] rounded-2xl p-4 border border-gray-100"
                      >
                        <div className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-1">
                          {ts.step}
                        </div>
                        <div className="text-[13px] font-semibold mb-1">{ts.title}</div>
                        <div className="text-[12px] text-[#666] leading-relaxed">{ts.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              도입 효과
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              데이터가 만드는 완벽한 캠프 준비
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => {
              const BIcon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  {...fadeUp(i * 0.1)}
                  className="group bg-[#F5F5F7] rounded-3xl p-8 hover:bg-indigo-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 group-hover:bg-indigo-200 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                    <BIcon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2">{b.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="bg-gradient-to-br from-[#1D1D1F] to-[#2a2a2e] text-white py-20 px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            지금 바로 등록을 시작하세요
          </h2>
          <p className="text-white/60 mb-10 text-[16px]">
            확정된 비밀번호를 준비하고 앱에 접속해 3단계를 완료해 주세요.
          </p>
          <a
            href="https://ican-registration-app.vercel.app/camp-registration.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1d1d1f] font-semibold text-[15px] px-10 py-4 rounded-2xl hover:bg-white/90 transition-all shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
          >
            캠프등록 앱 열기
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default CampRegistration;
