import { ReactComponent as StarIcon } from './../star/Star.svg';

interface StarsProps {
   stars: number;
}

export const Stars = ({ stars }: StarsProps) => {
   const Stars = [];
   for (let i = 1; i <= stars; i++) {
      Stars.push(<StarIcon />);
   }
   return (
      <div
         style={{
            display: 'flex',
            gap: '10px',
         }}
      >
         {Stars}
      </div>
   );
};
