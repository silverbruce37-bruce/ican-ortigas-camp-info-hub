export type MathDetail = {
    concepts: { name: string; desc: string }[];
    flowchart: { step: number; title: string; desc: string; formula?: string }[];
};

export const mathDetails: Record<string, MathDetail> = {
    compound: {
        concepts: [
            { name: "거듭제곱", desc: "같은 수를 여러 번 곱하는 원리" },
            { name: "등비수열", desc: "일정한 비율로 증가하는 수열" },
            { name: "지수함수와 로그", desc: "기하급수적 성장과 그 역연산" }
        ],
        flowchart: [
            { step: 1, title: "원금 설정", desc: "초기 투자 금액(P)을 설정합니다." },
            { step: 2, title: "1년 후 이자 계산", desc: "원금에 (1 + 이자율 r)을 곱합니다.", formula: "P × (1+r)" },
            { step: 3, title: "n년 후 복리 계산", desc: "매년 불어난 금액에 다시 이자가 붙으므로 거듭제곱을 사용합니다.", formula: "P × (1+r)^n" },
            { step: 4, title: "72의 법칙 도출", desc: "로그(log)를 취해 원금이 2배가 되는 시간(n)을 근사치로 구합니다.", formula: "n ≈ 72 / (r×100)" }
        ]
    },
    randomWalk: {
        concepts: [
            { name: "확률분포", desc: "발생 가능한 사건들의 확률 모형" },
            { name: "정규분포", desc: "자연계와 사회현상에서 흔히 나타나는 종 모양의 분포" },
            { name: "위너 과정", desc: "연속적인 시간에서의 브라운 운동 수학적 모델" }
        ],
        flowchart: [
            { step: 1, title: "주가 변동 가정", desc: "매일 주가가 오르거나 내릴 확률은 독립적이라고 가정합니다." },
            { step: 2, title: "평균과 분산", desc: "장기적인 평균 수익률(Drift)과 변동성(Volatility)을 분리합니다." },
            { step: 3, title: "정규분포 적용", desc: "단기적인 가격 변화는 정규분포를 따른다고 모델링합니다." },
            { step: 4, title: "로그 정규분포", desc: "주가는 0 밑으로 떨어질 수 없으므로 로그 정규분포를 사용하여 미래 가격 확률을 계산합니다." }
        ]
    },
    blackScholes: {
        concepts: [
            { name: "편미분 방정식", desc: "다수의 독립 변수를 가지는 함수의 시간적/공간적 변화율 모델링" },
            { name: "무위험 고수익 (차익거래)", desc: "위험 없이 수익을 내는 시장의 불균형 상태 (모형에서는 없다고 가정)" },
            { name: "이토의 보조정리", desc: "확률 미적분학에서 함수의 미분 규칙을 제공하는 핵심 정리" }
        ],
        flowchart: [
            { step: 1, title: "옵션 포트폴리오 구성", desc: "주식과 파생상품을 조합하여 위험이 0인 무위험 포트폴리오를 구성합니다." },
            { step: 2, title: "무위험 수익률 적용", desc: "위험이 0인 포트폴리오의 수익률은 무위험 이자율이어야 합니다.", formula: "r × V" },
            { step: 3, title: "이토의 보조정리 전개", desc: "기초자산의 무작위 한 움직임을 반영한 미분 방정식을 세웁니다." },
            { step: 4, title: "편미분 방정식 도출", desc: "기초 방정식(블랙-숄스 편미분 방정식)을 풀면 옵션의 이론적 적정 가격이 도출됩니다.", formula: "C = S_0 N(d_1) - K e^{-rT} N(d_2)" }
        ]
    },
    amm: {
        concepts: [
            { name: "상수곱 공식", desc: "x * y = k 라는 단순하지만 아름다운 수학 공식" },
            { name: "유동성 풀(Liquidity Pool)", desc: "거래소의 호가창 대신 자산을 예치해두는 저장소" },
            { name: "비영구적 손실 (Impermanent Loss)", desc: "유동성 제공 시 시장 가격 변동으로 인해 발생하는 잠재적 손실" }
        ],
        flowchart: [
            { step: 1, title: "풀 생성", desc: "두 종류의 토큰(X, Y)을 풀에 예치하여 유동성을 공급합니다." },
            { step: 2, title: "상수(K) 설정", desc: "초기 토큰 X의 갯수와 Y의 갯수를 곱해 불변의 상수 K를 만듭니다.", formula: "X × Y = K" },
            { step: 3, title: "사용자 스왑(교환)", desc: "사용자가 토큰 X를 내고(Δx) 풀에서 토큰 Y를 가져갑니다(Δy)." },
            { step: 4, title: "가격 자동 조정", desc: "K값을 유지하기 위해 새로운 X수량에 맞게 Y수량이 조정되며, 이로 인해 교환비율(가격)이 형성됩니다.", formula: "(X+Δx) × (Y-Δy) = K" }
        ]
    }
};
