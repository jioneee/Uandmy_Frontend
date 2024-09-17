import ArrowCircleUpRight from '../../../public/images/ArrowCircleUpRight.svg';
import Avartar from './Avatar';

export interface TeamMembersCardProps {
  name: string;
  job: string;
  position: string;
  tags: string[];
}

const TeamMemberCard = ({
  name,
  job,
  position,
  tags,
}: TeamMembersCardProps) => {
  return (
    <>
      <div className="w-[10.313rem] p-3 bg-white border border-[#F6F6F6] rounded-lg drop-shadow-custom  ">
        <div className="flex flex-col items-center mt-3 gap-2 font-medium ">
          <div className="absolute top-2 right-2">
            <ArrowCircleUpRight />
          </div>
          <div>
            <Avartar />
          </div>

          <p>{name}</p>
          <span className="flex flex-row text-[#82829B] gap-1">
            <p>{job}</p>
            <p> | </p>
            <p>{position}</p>
          </span>

          <span className="w-full flex flex-wrap justify-center gap-1">
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="after:content-['·'] last:after:content-none text-xs">
                {tag}
              </p>
            ))}
          </span>
          <button className="w-[8.563rem] border border-primary text-primary hover:border-greyBorder rounded-lg">
            친구 추가하기 +
          </button>
        </div>
      </div>
    </>
  );
};
export default TeamMemberCard;
