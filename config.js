/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "옥한영",
    nameEn: "Groom",
    father: "옥용표",
    mother: "김남선",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박다연",
    nameEn: "Bride",
    father: "박태영",
    mother: "이신숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-31",
    time: "14:00",
    venue: "더레이나 웨딩홀",
    hall: "에벤에셀관 B1",
    address: "경기도 의정부시 호암로 95 \n 에벤에셀관 1F",
    tel: "031-876-2888"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/srXBPpKS8K",
    naver: "https://naver.me/5pwowzMl"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "옥한영", bank: "국민은행", number: "010-5828-7597" },
      { role: "아버지", name: "옥용표", bank: "농협은행", number: "302-4550-7597-11" },
      { role: "어머니", name: "김남선", bank: "농협은행", number: "201010-52-055477" }
    ],
    bride: [
      { role: "신부", name: "박다연", bank: "국민은행", number: "584102-01-843289" },
      { role: "아버지", name: "박태영", bank: "국민은행", number: "219-21-0422-286" },
      { role: "어머니", name: "이신숙", bank: "농협은행", number: "109-02-338286" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 5월 31일, 소중한 분들을 초대합니다."
  }
};
