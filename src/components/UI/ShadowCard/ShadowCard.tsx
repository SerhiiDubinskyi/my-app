import "./ShadowCard.css"

interface ShadowCardProps {
    component: React.ReactNode;
}
//add step of total steps
//add button to go to next step
//add button to go to previous step

export default function ShadowCard({children}: {children: React.ReactNode}) {
   
    return (
      <div className="ShadowCard">
        {children}
      </div>
    );
  }