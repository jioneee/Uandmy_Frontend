'use client';

export default function PendingProfileCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-[8px] gap-2 w-[354px] h-[191px] bg-white text-[#000] border border-[#E9E9E9]">
        <div>
          <div className="flex gap-[18px]">
            <div className="flex gap-2">
              <img
                src="/images/pending-profile.png"
                alt="Pending Profile"
                className="h-[56px] w-[56px]"
              />
              <div className="flex flex-col">
                <div className="text-[16px] font-semibold">제이크</div>
                <div className="text-[13px] text-[#65657E]">기획자</div>
                <div className="flex text-[11px] text-[#767688;] font-[500]">
                  <div className="hover:text-[#82829B] relative after:content-['|'] after:mx-3 after:text-[#ADB5BD]">
                    스터디 <span className="text-[#7876E3]">8</span>회
                  </div>
                  <div>
                    출석률 <span className="text-[#7876E3]">98</span>%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[7px] text-[14px] text-[#434343]">
              <button className="px-4 py-2 gap-[8px] bg-[#F1F1F1] rounded-full">
                거절
              </button>
              <button className="px-4 py-2 gap-[8px] bg-[#804DFF] text-[#fff] rounded-full">
                수락
              </button>
            </div>
          </div>
        </div>
        <div className="line-clamp-2 text-[14px] text-[#434343] mx-[11px]">
          안녕하세요! 올해 졸업하고 취업 준비 중인데, 경력과 스터디 경험은 별로
          없지만 책임감 있고 열정적으로 스터디를 참여하고 싶습니다.
        </div>
      </div>
    </>
  );
}
