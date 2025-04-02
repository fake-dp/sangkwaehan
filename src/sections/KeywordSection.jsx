// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import styled from 'styled-components';

// gsap.registerPlugin(ScrollTrigger);


// const Section = styled.section`
//   position: relative;
//   height: 300vh;
// `;

// const StickyWrapper = styled.div`
//   position: sticky;
//   top: 0;
//   height: 100vh;
//   overflow: hidden;
// `;

// const HorizontalScroll = styled.div`
//   display: flex;
//   width: 300vw;
//   height: 100%;
// `;

// const Panel = styled.div`
//   flex: 0 0 100vw;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ bgColor }) => bgColor};
//   color: white;
//   font-size: 2rem;
// `;

// const AfterSection = styled.div`
//   min-height: 100vh;
//   background: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const HorizontalScrollSection = () => {
//   const rowRef = useRef(null);

//   useEffect(() => {
//     const panels = gsap.utils.toArray('.panel');

//     gsap.to(panels, {
//       xPercent: -100 * (panels.length - 1),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: 'top top',
//         end: () => rowRef.current.offsetWidth + window.innerWidth * 0.5,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

    
//   }, []);

//   return (
//     <>
//       <Section>
//         <StickyWrapper>
//           <HorizontalScroll ref={rowRef}>
//             <Panel className="panel" bgColor="#003a8c">Potent & Effective</Panel>
//             <Panel className="panel" bgColor="#00c853">Quick & Sure</Panel>
//             <Panel className="panel" bgColor="#ff3e96">Grab & Go</Panel>
//           </HorizontalScroll>
//         </StickyWrapper>
//       </Section>

//       <AfterSection>
//         <h2>이건 6번 섹션 (다음 콘텐츠)</h2>
//       </AfterSection>
//     </>
//   );
// };

// export default HorizontalScrollSection;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);


const Section = styled.section`
  position: relative;
  height: 300vh;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;

const HorizontalScroll = styled.div`
  display: flex;
  width: 300vw;
  height: 100%;
`;

const Panel = styled.div`
  flex: 0 0 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-size: 2rem;
`;

const AfterSection = styled.div`
  min-height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalScrollSection = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top top',
        end: () => rowRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <>
      <Section>
        <StickyWrapper>
          <HorizontalScroll ref={rowRef}>
            <Panel className="panel" bgColor="#003a8c">Potent & Effective</Panel>
            <Panel className="panel" bgColor="#00c853">Quick & Sure</Panel>
            <Panel className="panel" bgColor="#ff3e96">Grab & Go</Panel>
          </HorizontalScroll>
        </StickyWrapper>
      </Section>

      <AfterSection>
        <h2>이건 6번 섹션 (다음 콘텐츠)</h2>
      </AfterSection>
    </>
  );
};

export default HorizontalScrollSection;
