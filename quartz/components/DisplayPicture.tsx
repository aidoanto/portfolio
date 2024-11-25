import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function DisplayPicture(props: QuartzComponentProps) {
    return (
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img 
          src="/assets/dp-circle.png" 
          alt="Display Picture" 
          style={{ 
            borderRadius: "50%", 
            width: "20vw", 
            maxWidth: "150px", 
            height: "auto"
          }} 
        />
      </div>
    )
  }

  return DisplayPicture
}) satisfies QuartzComponentConstructor