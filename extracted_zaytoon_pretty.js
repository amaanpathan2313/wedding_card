309674,e=>{
  "use strict";
  var t=e.i(843476),s=e.i(271645),a=e.i(716436),n=e.i(348934),r=e.i(347571),i=e.i(925277),l=e.i(26580),o=e.i(874944),c=e.i(687753);
  let d={
    mangni:"منگنی",nikah:"نِكَاح",nikaah:"نِكَاح",walima:"وَلِيمَة",waleema:"وَلِيمَة",mehendi:"مہندی",mehndi:"مہندی",henna:"مہندی",dholki:"ڈھولکی",haldi:"ہلدی",reception:"استقبال",sangeet:"سنگیت"
  },h={
    mangni:"rings",nikah:"moon",nikaah:"moon",walima:"lantern",waleema:"lantern",reception:"lantern",mehendi:"leaf",mehndi:"leaf",henna:"leaf",haldi:"leaf"
  };
  function m({
    audioRef:e
  }){
    let[a,n]=(0,s.useState)(!0);
    return(0,t.jsxs)("button",{
      type:"button",className:`music-toggle ${
        a?"is-playing":""
      }`,onClick:function(){
        let t=e.current;
        t&&(a?t.pause():t.play().catch(()=>{
          
        }),n(e=>!e))
      },"aria-label":a?"Pause music":"Play music","aria-pressed":a,children:[(0,t.jsx)("span",{
        className:"music-toggle__bar"
      }),(0,t.jsx)("span",{
        className:"music-toggle__bar"
      }),(0,t.jsx)("span",{
        className:"music-toggle__bar"
      })]
    })
  }var u=e.i(598287),p=e.i(59133),x=e.i(846932);
  let f={
    div:x.motion.div,p:x.motion.p,a:x.motion.a,form:x.motion.form,h1:x.motion.h1
  },g={
    hidden:{
      opacity:0,y:16,scale:.99
    },visible:{
      opacity:1,y:0,scale:1
    }
  },j={
    hidden:{
      opacity:0,y:22,scale:.97
    },visible:{
      opacity:1,y:0,scale:1
    }
  };
  function b({
    as:e="div",className:a="",delay:n=0,show:r,style:i,children:l,...o
  }){
    let c=f[e]||x.motion[e]||x.motion.div,d=void 0!==r,h=a.includes("card")?j:g,[m,u]=(0,s.useState)(!1);
    return(0,t.jsx)(c,{
      className:`fade ${
        (d?r:m)?"in":""
      } ${
        a
      }`.trim(),style:i,initial:h.hidden,...d?{
        animate:r?h.visible:h.hidden
      }:{
        whileInView:h.visible
      },transition:{
        duration:.6,ease:[.16,1,.3,1],delay:n
      },...d?{
        
      }:{
        viewport:{
          once:!0,amount:.01,margin:"0px 0px 0px 0px"
        },onViewportEnter:()=>u(!0)
      },...o,children:l
    })
  }let y={
    petals:11,sparkle:16,leaves:9,orbs:12,dust:14
  };
  function w({
    variant:e="petals",count:a,seed:n=1
  }){
    let r=(0,s.useRef)(null),[i,l]=(0,s.useState)(!1),[o,c]=(0,s.useState)(!1);
    (0,s.useEffect)(()=>{
      c(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    },[]);
    let d=(0,s.useMemo)(()=>{
      let t=a??y[e]??12,s={
        s:(9301*n+49297)%233280
      },r=()=>(s.s=(9301*s.s+49297)%233280,s.s/233280);
      return Array.from({
        length:t
      },(e,t)=>({
        id:t,x:100*r(),y:100*r(),scale:.75+1.15*r(),delay:-(16*r()),dur:8+10*r(),driftX:(r()-.5)*140,driftY:30+50*r(),spin:(r()-.5)*340,opacity:.5+.4*r()
      }))
    },[e,a,n]);
    return((0,s.useEffect)(()=>{
      let e=r.current;
      if(!e)return;
      let t=new IntersectionObserver(([e])=>l(e.isIntersecting),{
        rootMargin:"15% 0px"
      });
      return t.observe(e),()=>t.disconnect()
    },[]),o)?null:(0,t.jsx)("div",{
      ref:r,className:`ambient ambient--${
        e
      } ${
        i?"is-live":""
      }`.trim(),"aria-hidden":"true",children:d.map(e=>(0,t.jsx)("span",{
        style:{
          left:`${
            e.x
          }%`,top:`${
            e.y
          }%`,"--s":e.scale,"--delay":`${
            e.delay
          }s`,"--dur":`${
            e.dur
          }s`,"--dx":`${
            e.driftX
          }px`,"--dy":`${
            e.driftY
          }px`,"--spin":`${
            e.spin
          }deg`,"--o":e.opacity
        }
      },e.id))
    })
  }function N({
    className:e
  }){
    return(0,t.jsxs)("svg",{
      viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:[(0,t.jsx)("path",{
        d:"M25 6a14 14 0 1 0 0 28 16 16 0 1 1 0-28z",fill:"currentColor"
      }),(0,t.jsx)("path",{
        d:"M31 9.5l1.3 2.8 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4z",fill:"currentColor"
      })]
    })
  }function _({
    className:e
  }){
    return(0,t.jsx)("img",{
      src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/divider.png",alt:"",className:e,"aria-hidden":"true",draggable:"false"
    })
  }function k({
    className:e
  }){
    return(0,t.jsxs)("svg",{
      viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:[(0,t.jsx)("circle",{
        cx:"16",cy:"22",r:"10",stroke:"currentColor",strokeWidth:"1.6"
      }),(0,t.jsx)("circle",{
        cx:"25",cy:"22",r:"10",stroke:"currentColor",strokeWidth:"1.6",opacity:"0.6"
      }),(0,t.jsx)("path",{
        d:"M22 8l1.6 3.4 3.4.4-2.5 2.4.6 3.4-3.1-1.7-3.1 1.7.6-3.4-2.5-2.4 3.4-.4z",fill:"currentColor",opacity:"0.8"
      })]
    })
  }function S({
    className:e
  }){
    return(0,t.jsx)("svg",{
      viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:(0,t.jsx)("path",{
        d:"M20 32s-11-7-11-15.5A6 6 0 0 1 20 12a6 6 0 0 1 11 4.5C31 25 20 32 20 32z",stroke:"currentColor",strokeWidth:"1.6",strokeLinejoin:"round"
      })
    })
  }function C({
    initials:e=["A","B"],className:s
  }){
    return(0,t.jsxs)("svg",{
      viewBox:"0 0 120 70",fill:"none",className:s,"aria-hidden":"true",children:[(0,t.jsx)("circle",{
        cx:"47",cy:"35",r:"25",stroke:"currentColor",strokeWidth:"1.3",opacity:"0.75"
      }),(0,t.jsx)("circle",{
        cx:"73",cy:"35",r:"25",stroke:"currentColor",strokeWidth:"1.3",opacity:"0.75"
      }),(0,t.jsx)("text",{
        x:"36",y:"43",textAnchor:"middle",fontFamily:"var(--display)",fontSize:"24",fill:"currentColor",children:e[0]
      }),(0,t.jsx)("text",{
        x:"84",y:"43",textAnchor:"middle",fontFamily:"var(--display)",fontSize:"24",fill:"currentColor",children:e[1]
      })]
    })
  }let M={
    rings:k,leaf:function({
      className:e
    }){
      return(0,t.jsxs)("svg",{
        viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:[(0,t.jsx)("path",{
          d:"M20 34C11 30 8 21 12 10c11 1 17 8 16 19",stroke:"currentColor",strokeWidth:"1.5"
        }),(0,t.jsx)("path",{
          d:"M20 34c0-9 2-16 8-21",stroke:"currentColor",strokeWidth:"1.2",opacity:"0.6"
        }),(0,t.jsx)("path",{
          d:"M15 20c3-1 6-1 9 1M14 26c3-1 7 0 9 2",stroke:"currentColor",strokeWidth:"1",opacity:"0.5"
        })]
      })
    },moon:N,lantern:function({
      className:e
    }){
      return(0,t.jsxs)("svg",{
        viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:[(0,t.jsx)("path",{
          d:"M20 3v4",stroke:"currentColor",strokeWidth:"1.4"
        }),(0,t.jsx)("path",{
          d:"M14 7h12l-2 4H16z",fill:"currentColor",opacity:"0.85"
        }),(0,t.jsx)("rect",{
          x:"12.5",y:"11",width:"15",height:"19",rx:"4",stroke:"currentColor",strokeWidth:"1.5"
        }),(0,t.jsx)("path",{
          d:"M20 15v11M14.5 20.5h11",stroke:"currentColor",strokeWidth:"1",opacity:"0.5"
        }),(0,t.jsx)("path",{
          d:"M16 30h8l-1.3 5h-5.4z",fill:"currentColor",opacity:"0.85"
        })]
      })
    }
  },$={
    heart:S,hands:function({
      className:e
    }){
      return(0,t.jsxs)("svg",{
        viewBox:"0 0 40 40",fill:"none",className:e,"aria-hidden":"true",children:[(0,t.jsx)("path",{
          d:"M20 6c1.2 6.5 1.2 11-1 16.5-2.2 5.5-2.2 9.5 1 13.5 3.2-4 3.2-8 1-13.5-2.2-5.5-2.2-10-1-16.5z",stroke:"currentColor",strokeWidth:"1.4"
        }),(0,t.jsx)("path",{
          d:"M12.5 11c2.2 7.5 2.2 13-1 18.5M27.5 11c-2.2 7.5-2.2 13 1 18.5",stroke:"currentColor",strokeWidth:"1.2",opacity:"0.6"
        })]
      })
    }
  };
  function E(e=.3){
    let t=(0,s.useRef)(null);
    return(0,s.useEffect)(()=>{
      let s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=t.current;
      if(!n||s||!a)return;
      let r=t=>{
        let s=n.getBoundingClientRect(),a=(t.clientX-s.left-s.width/2)*e,r=(t.clientY-s.top-s.height/2)*e;
        n.style.transform=`translate(${
          a
        }px, ${
          r
        }px)`
      },i=()=>{
        n.style.transform=""
      };
      return n.addEventListener("mousemove",r),n.addEventListener("mouseleave",i),()=>{
        n.removeEventListener("mousemove",r),n.removeEventListener("mouseleave",i)
      }
    },[e]),t
  }let T={
    w:1280,h:720,fx:.5,fy:.8
  },L={
    w:720,h:1280,fx:.5,fy:.745
  };
  function P({
    couple:e,day:a,hero:n,audioRef:r,onOpen:i,showRsvp:l=!0,showEvents:o=!0
  }){
    let c=(0,s.useRef)(null),d=(0,s.useRef)(null),h=(0,s.useRef)(null),[m,x]=(0,s.useState)("closed"),{
      matches:f,resolved:g
    }=function(e){
      let[t,a]=(0,s.useState)({
        matches:!1,resolved:!1
      });
      return(0,s.useEffect)(()=>{
        let t=window.matchMedia(e),s=e=>a({
          matches:e.matches,resolved:!0
        });
        return a({
          matches:t.matches,resolved:!0
        }),t.addEventListener("change",s),()=>t.removeEventListener("change",s)
      },[e]),t
    }("(min-width: 768px)"),[j,y]=(0,s.useState)(null),N=(0,s.useRef)(i);
    (0,s.useEffect)(()=>{
      N.current=i
    }),(0,u.useFitNames)([m]);
    let k=E(),S=E();
    function M(e){
      let t=e.currentTarget;
      if(t.paused&&!(t.currentTime>0))try{
        t.currentTime=.01
      }catch{
        
      }
    }(0,s.useEffect)(()=>{
      if(!g)return;
      let e=(f?c:d).current;
      e&&0===e.readyState&&2!==e.networkState&&e.load()
    },[g,f]),(0,s.useEffect)(()=>{
      if("opening"!==m)return;
      let e=(f?c:d).current,t=setTimeout(()=>{
        x("opened"),N.current?.()
      },1e3*((e&&Number.isFinite(e.duration)&&e.duration>0?e.duration:6)+4));
      return()=>clearTimeout(t)
    },[m,f]),(0,s.useEffect)(()=>{
      let e=h.current;
      if(!e)return;
      let t=f?T:L;
      function s(){
        let{
          width:s,height:a
        }=e.getBoundingClientRect();
        if(!s||!a)return;
        let n=Math.max(s/t.w,a/t.h),r=t.w*n,i=t.h*n,l=(s-r)/2+t.fx*r,o=(a-i)/2+t.fy*i,c=Math.min(140,.18*s),d=Math.min(160,.22*a);
        y({
          x:Math.min(Math.max(l,c),s-c),y:Math.min(Math.max(o,d),a-d)
        })
      }s();
      let a=new ResizeObserver(s);
      return a.observe(e),()=>a.disconnect()
    },[f]);
    let $="opened"===m,A=()=>{
      x("opened"),i?.()
    },R=()=>{
      "opening"===m&&A()
    };
    return(0,t.jsxs)("header",{
      className:`hero ${
        $?"":"is-closed"
      }`,id:"top",children:[(0,t.jsxs)("div",{
        className:"hero__media",ref:h,children:[(n.video?.desktop||n.video?.mobile)&&(0,t.jsx)("video",{
          ref:c,className:"hero__video hero__video--desktop",src:n.video.desktop??n.video.mobile,muted:!0,playsInline:!0,preload:g&&f?"auto":"none",onLoadedMetadata:M,onEnded:A,onError:R,"aria-hidden":"true"
        }),(n.video?.mobile||n.video?.desktop)&&(0,t.jsx)("video",{
          ref:d,className:"hero__video hero__video--mobile",src:n.video.mobile??n.video.desktop,muted:!0,playsInline:!0,preload:g&&!f?"auto":"none",onLoadedMetadata:M,onEnded:A,onError:R,"aria-hidden":"true"
        }),(0,t.jsx)("img",{
          className:`hero__frame hero__frame--desktop ${
            $?"is-visible":""
          }`,src:n.frame?.desktop??n.frame?.mobile,alt:"","aria-hidden":"true"
        }),(0,t.jsx)("img",{
          className:`hero__frame hero__frame--mobile ${
            $?"is-visible":""
          }`,src:n.frame?.mobile??n.frame?.desktop,alt:"","aria-hidden":"true"
        }),(0,t.jsx)("span",{
          className:`hero__scrim ${
            $?"is-visible":""
          }`,"aria-hidden":"true"
        })]
      }),$&&(0,t.jsx)(w,{
        variant:"petals",seed:1,count:14
      }),!$&&(0,t.jsx)("button",{
        type:"button",className:`hero__gate ${
          "opening"===m?"is-opening":""
        }`,onClick:function(){
          let e;
          if("closed"!==m)return;
          x("opening"),e=["#b3a05e","#d7c995","#686a31","#fffdf8"],(0,p.default)({
            particleCount:70,spread:100,startVelocity:40,gravity:.9,origin:{
              x:.5,y:.4
            },colors:e,scalar:.85,ticks:220
          }),(0,p.default)({
            particleCount:26,angle:60,spread:65,startVelocity:48,origin:{
              x:.08,y:.55
            },colors:e,scalar:.9,ticks:200
          }),(0,p.default)({
            particleCount:26,angle:120,spread:65,startVelocity:48,origin:{
              x:.92,y:.55
            },colors:e,scalar:.9,ticks:200
          }),r?.current?.play().catch(()=>{
            
          });
          let t=(f?c:d).current;
          t?.play().catch(()=>{
            x("opened"),i?.()
          })
        },disabled:"opening"===m,"aria-label":"Break the seal to open the invitation",children:(0,t.jsxs)("span",{
          className:"hero__seal-wrap",style:j?{
            left:`${
              j.x
            }px`,top:`${
              j.y
            }px`
          }:void 0,children:[(0,t.jsx)("span",{
            className:"seal-shadow-blob","aria-hidden":"true"
          }),(0,t.jsx)("span",{
            className:"seal-glow-core","aria-hidden":"true"
          }),(0,t.jsx)("span",{
            className:"seal-glow-rays","aria-hidden":"true"
          }),(0,t.jsx)("span",{
            className:"seal-glow-rays seal-glow-rays-2","aria-hidden":"true"
          }),(0,t.jsx)("span",{
            className:"seal-glow-ring","aria-hidden":"true"
          }),(0,t.jsx)("img",{
            className:"hero__seal",src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/wax-seal.png",alt:""
          }),(0,t.jsx)("span",{
            className:"hero__gate-label sr-only",children:"Tap to open"
          })]
        })
      }),(0,t.jsxs)("div",{
        className:`hero__content ${
          $?"is-visible":""
        }`,children:[(0,t.jsx)(b,{
          as:"p",className:"hero__bismillah ar",delay:.02,show:$,children:n.bismillah
        }),(0,t.jsx)(b,{
          as:"p",className:"eyebrow",delay:.06,show:$,children:n.eyebrow
        }),(0,t.jsx)(b,{
          as:"p",className:"hero__intro",delay:.12,show:$,children:n.intro
        }),(0,t.jsx)(b,{
          as:"h1",className:"hero__names",delay:.18,show:$,children:"groom-first"===e.nameOrder?(0,t.jsxs)(t.Fragment,{
            children:[(0,t.jsx)("span",{
              "data-fit-name":!0,children:e.groom
            }),(0,t.jsx)("span",{
              className:"script hero__amp",children:"&"
            }),(0,t.jsx)("span",{
              "data-fit-name":!0,children:e.bride
            })]
          }):(0,t.jsxs)(t.Fragment,{
            children:[(0,t.jsx)("span",{
              "data-fit-name":!0,children:e.bride
            }),(0,t.jsx)("span",{
              className:"script hero__amp",children:"&"
            }),(0,t.jsx)("span",{
              "data-fit-name":!0,children:e.groom
            })]
          })
        }),(0,t.jsx)(b,{
          delay:.24,show:$,children:(0,t.jsx)(_,{
            className:"hero__rule"
          })
        }),(0,t.jsx)(b,{
          as:"p",className:"hero__occasion",delay:.28,show:$,children:n.occasion
        }),(0,t.jsxs)(b,{
          className:"hero__when",delay:.32,show:$,children:[(0,t.jsx)("span",{
            children:a.weekday
          }),(0,t.jsx)("span",{
            className:"hero__dot"
          }),(0,t.jsx)("span",{
            children:a.date
          }),(0,t.jsx)("span",{
            className:"hero__dot hero__dot--last"
          }),(0,t.jsx)("span",{
            className:"hero__city",children:a.city
          })]
        }),(0,t.jsxs)(b,{
          className:"hero__actions",delay:.38,show:$,children:[!l&&!o&&(0,t.jsx)("a",{
            href:"#verse",className:"btn btn--fill hero__btn--magnetic",children:"View Invitation"
          }),l&&(0,t.jsx)("a",{
            href:"#rsvp",className:"btn btn--fill hero__btn--magnetic",ref:k,children:"RSVP"
          }),o&&(0,t.jsx)("a",{
            href:"#events",className:"btn btn--line hero__btn--magnetic",ref:S,children:"View Events"
          })]
        }),(0,t.jsx)(b,{
          delay:.44,show:$,children:(0,t.jsx)(C,{
            initials:e.initials,className:"hero__monogram"
          })
        })]
      }),$&&(0,t.jsxs)(t.Fragment,{
        children:[(0,t.jsx)(b,{
          className:"hero__corner hero__corner--left",delay:.05,show:$,children:(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-left.png",alt:"","aria-hidden":"true",draggable:"false"
          })
        }),(0,t.jsx)(b,{
          className:"hero__corner hero__corner--right",delay:.1,show:$,children:(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-right.png",alt:"","aria-hidden":"true",draggable:"false"
          })
        }),(0,t.jsx)(b,{
          className:"hero__side hero__side--left",delay:.15,show:$,children:(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/side-floral-left.png",alt:"","aria-hidden":"true",draggable:"false"
          })
        }),(0,t.jsx)(b,{
          className:"hero__side hero__side--right",delay:.2,show:$,children:(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/side-floral-right.png",alt:"","aria-hidden":"true",draggable:"false"
          })
        }),(0,t.jsxs)(b,{
          as:"a",href:"#verse",className:"hero__scroll",delay:.46,show:$,"aria-label":"Scroll down",children:[(0,t.jsx)("span",{
            children:"Scroll"
          }),(0,t.jsx)("svg",{
            viewBox:"0 0 18 11",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{
              d:"M1 1.5 9 9.5 17 1.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"
            })
          })]
        })]
      })]
    })
  }function A({
    data:e
  }){
    return(0,t.jsxs)("section",{
      id:"verse",className:"sec sec--alt sec--geo verse",children:[(0,t.jsx)(w,{
        variant:"sparkle",seed:2
      }),(0,t.jsx)("div",{
        className:"wrap",children:(0,t.jsxs)(b,{
          className:"card card--framed verse__card",children:[(0,t.jsx)("span",{
            className:"verse__quote","aria-hidden":"true",children:"“"
          }),(0,t.jsx)("p",{
            className:"ar verse__arabic",children:e.arabic
          }),(0,t.jsx)("p",{
            className:"verse__translation",children:e.translation
          }),(0,t.jsx)("p",{
            className:"verse__ref",children:e.reference
          })]
        })
      })]
    })
  }function R({
    eyebrow:e,title:s
  }){
    return(0,t.jsxs)("div",{
      className:"sectitle",children:[(0,t.jsx)(b,{
        as:"p",className:"eyebrow",children:e
      }),(0,t.jsx)(b,{
        as:"h2",className:"title sectitle__h",delay:.08,children:s
      }),(0,t.jsx)(b,{
        delay:.14,children:(0,t.jsx)(_,{
          className:"sectitle__rule"
        })
      })]
    })
  }let W=["#b3a05e","#d7c995","#858640","#686a31","#fbf8f1"];
  function I({
    data:e,day:a,couple:n
  }){
    let r=(0,s.useRef)(null),i=(0,s.useRef)(null),l=(0,s.useRef)(!1),o=(0,s.useRef)(null),c=(0,s.useRef)(0),d=(0,s.useRef)(!1),h=(0,s.useRef)(!1),m=(0,s.useRef)(!1),[u,p]=(0,s.useState)(!1),[x,f]=(0,s.useState)(!1),g=(0,s.useCallback)(e=>{
      let t=e.getContext("2d"),s=e.clientWidth,a=e.clientHeight,n=t.createLinearGradient(0,0,s,a);
      n.addColorStop(0,"#686a31"),n.addColorStop(.35,"#e8dba0"),n.addColorStop(.6,"#b3a05e"),n.addColorStop(1,"#d7c995"),t.fillStyle=n,t.fillRect(0,0,s,a),t.globalAlpha=.2,t.strokeStyle="#fff",t.lineWidth=2;
      for(let e=-a;
      e<s;
      e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e+a,a),t.stroke();
      t.globalAlpha=1,t.fillStyle="rgba(45, 34, 10, 0.65)",t.textAlign="center",t.textBaseline="middle",t.font="600 13px Cinzel, Georgia, serif",t.letterSpacing="3px",t.fillText("SCRATCH HERE",s/2,a/2-12),t.font='400 26px "Cormorant Garamond", Georgia, serif',t.letterSpacing="0px",t.fillText("✦",s/2,a/2+18),h.current=!0
    },[]),j=(0,s.useCallback)(()=>{
      let e=i.current;
      if(!e)return;
      let t=e.getBoundingClientRect();
      if(!t.width||!t.height)return;
      let s=Math.min(window.devicePixelRatio||1,2);
      e.width=Math.round(t.width*s),e.height=Math.round(t.height*s),e.getContext("2d").setTransform(s,0,0,s,0,0),g(e)
    },[g]);
    (0,s.useEffect)(()=>{
      if(x)return;
      j();
      let e=new ResizeObserver(j);
      return r.current&&e.observe(r.current),window.addEventListener("resize",j),()=>{
        e.disconnect(),window.removeEventListener("resize",j)
      }
    },[j,x]);
    let y=(0,s.useCallback)(()=>{
      if(m.current)return;
      m.current=!0,p(!0);
      let e=r.current;
      if(e&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        let t,s,a,n,r,i,l,o,c=e.getBoundingClientRect(),d=Math.min(Math.max(c.left+c.width/2,20),window.innerWidth-20),h=Math.min(Math.max(c.top+c.height/2,20),window.innerHeight-20);
        (s=document.createElement("canvas")).className="scratch__burst",document.body.appendChild(s),a=s.getContext("2d"),n=Math.min(window.devicePixelRatio||1,2),r=window.innerWidth,i=window.innerHeight,s.width=r*n,s.height=i*n,a.setTransform(n,0,0,n,0,0),l=Array.from({
          length:70
        },()=>{
          let e=-Math.PI/2+(Math.random()-.5)*Math.PI*1.1,t=4+8*Math.random();
          return{
            x:d,y:h,vx:Math.cos(e)*t+(Math.random()-.5)*2,vy:Math.sin(e)*t,rw:5+7*Math.random(),rh:3+5*Math.random(),spin:(Math.random()-.5)*.25,rot:Math.random()*Math.PI,colour:W[Math.random()*W.length|0],life:0
          }
        }),(o=()=>{
          a.clearRect(0,0,r,i);
          let e=!1;
          for(let t of l){
            t.life+=1,t.vy+=.16,t.vx*=.99,t.x+=t.vx,t.y+=t.vy,t.rot+=t.spin;
            let s=Math.max(0,1-t.life/110);
            s<=0||t.y>i+40||(e=!0,a.save(),a.translate(t.x,t.y),a.rotate(t.rot),a.globalAlpha=s,a.fillStyle=t.colour,a.beginPath(),a.ellipse(0,0,t.rw,t.rh,0,0,2*Math.PI),a.fill(),a.restore())
          }e?t=requestAnimationFrame(o):(cancelAnimationFrame(t),s.remove())
        })()
      }setTimeout(()=>f(!0),700)
    },[]),N=(0,s.useCallback)(()=>{
      let e=i.current;
      if(!e||!h.current)return 0;
      let t=e.getContext("2d"),{
        width:s,height:a
      }=e;
      if(!s||!a)return 0;
      let n=t.getImageData(0,0,s,a).data,r=0,l=0;
      for(let e=0;
      e<a;
      e+=8)for(let t=0;
      t<s;
      t+=8)n[(e*s+t)*4+3]<40&&(r+=1),l+=1;
      return l?r/l:0
    },[]),k=(0,s.useCallback)((e,t)=>{
      let s=i.current;
      if(!s)return;
      let a=s.getBoundingClientRect(),n=e-a.left,r=t-a.top,l=s.getContext("2d");
      l.globalCompositeOperation="destination-out",l.lineJoin="round",l.lineCap="round",l.lineWidth=44,l.beginPath(),o.current?(l.moveTo(o.current.x,o.current.y),l.lineTo(n,r)):(l.moveTo(n,r),l.lineTo(n+.1,r+.1)),l.stroke(),o.current={
        x:n,y:r
      },d.current=!0
    },[]),S=()=>{
      l.current=!1,o.current=null,!m.current&&d.current&&N()>=.42&&y()
    };
    return(0,t.jsxs)("section",{
      id:"surprise",className:"sec sec--geo scratch",children:[(0,t.jsx)(w,{
        variant:"dust",seed:3
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"A Little Surprise",title:e.title
        }),(0,t.jsx)(b,{
          className:"scratch__card",children:(0,t.jsxs)("div",{
            className:"card scratch__stage",ref:r,children:[(0,t.jsxs)("div",{
              className:"scratch__under",children:[(0,t.jsx)("p",{
                className:"scratch__eyebrow",children:"Save the date"
              }),(0,t.jsx)("p",{
                className:"scratch__day",children:a.weekday
              }),(0,t.jsx)("p",{
                className:"scratch__date",children:a.date
              }),(0,t.jsx)(_,{
                className:"scratch__rule"
              }),(0,t.jsx)("p",{
                className:"script scratch__line",children:e.reveal
              }),(0,t.jsx)("p",{
                className:"scratch__hash",children:n.hashtag
              })]
            }),!x&&(0,t.jsx)("canvas",{
              ref:i,className:`scratch__foil ${
                u?"is-lifted":""
              }`.trim(),onPointerDown:e=>{
                if(!m.current){
                  l.current=!0;
                  try{
                    e.currentTarget.setPointerCapture?.(e.pointerId)
                  }catch{
                    
                  }k(e.clientX,e.clientY)
                }
              },onPointerMove:e=>{
                l.current&&!m.current&&(k(e.clientX,e.clientY),++c.current%6==0&&N()>=.42&&y())
              },onPointerUp:S,onPointerCancel:S,onPointerLeave:S
            })]
          })
        }),!x&&(0,t.jsx)(b,{
          as:"p",className:"scratch__hint",delay:.1,children:e.hint
        })]
      })]
    })
  }function D({
    data:e,couple:a
  }){
    let[n,r]=(0,s.useState)(!1);
    return(0,t.jsx)("section",{
      id:"invite",className:"sec invite",children:(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"Our Invitation",title:e.greeting
        }),(0,t.jsxs)(b,{
          className:"envelop-frame",delay:.06,children:[(0,t.jsx)("span",{
            className:"envelop-frame__glow","aria-hidden":"true"
          }),(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-left.png",alt:"",className:"envelop-frame__corner envelop-frame__corner--left","aria-hidden":"true",draggable:"false"
          }),(0,t.jsx)("img",{
            src:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-right.png",alt:"",className:"envelop-frame__corner envelop-frame__corner--right","aria-hidden":"true",draggable:"false"
          }),(0,t.jsx)("button",{
            type:"button",className:`invite-flip ${
              n?"is-flipped":""
            }`,onClick:function(){
              r(e=>!e)
            },"aria-pressed":n,"aria-label":n?"Turn the card back over":"Tap to read our note",children:(0,t.jsxs)("span",{
              className:"invite-flip__inner",children:[(0,t.jsxs)("span",{
                className:"invite-flip__face invite-flip__face--front",children:[(0,t.jsxs)("span",{
                  className:"envelop-frame__seal","aria-hidden":"true",children:[(0,t.jsx)("span",{
                    className:"envelop-frame__seal-halo"
                  }),(0,t.jsx)("span",{
                    className:"envelop-frame__seal-ring"
                  }),(0,t.jsxs)("span",{
                    className:"envelop-frame__seal-mono script",children:[a.initials[0],(0,t.jsx)("span",{
                      className:"envelop-frame__seal-amp",children:"&"
                    }),a.initials[1]]
                  })]
                }),(0,t.jsx)("span",{
                  className:"script invite-flip__title",children:"With love"
                }),(0,t.jsxs)("span",{
                  className:"invite-flip__hint",children:[(0,t.jsxs)("svg",{
                    viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{
                      d:"M10 2.2c-3.6 2-6 5-6 7.8a6 6 0 0 0 12 0c0-2.8-2.4-5.8-6-7.8Z",stroke:"currentColor",strokeWidth:"1.3"
                    }),(0,t.jsx)("path",{
                      d:"M10 6.4v7.2M7 9.4l3-3 3 3",stroke:"currentColor",strokeWidth:"1.1",strokeLinecap:"round",strokeLinejoin:"round"
                    })]
                  }),"Tap to read our note"]
                })]
              }),(0,t.jsxs)("span",{
                className:"invite-flip__face invite-flip__face--back",children:[(0,t.jsx)("span",{
                  className:"invite__mark script","aria-hidden":"true",children:"“"
                }),(0,t.jsx)("span",{
                  className:"lede invite__message",children:e.message
                }),(0,t.jsx)(_,{
                  className:"invite__rule"
                }),(0,t.jsx)("span",{
                  className:"script invite__sign",children:e.signature
                }),(0,t.jsx)("span",{
                  className:"invite__names",children:"groom-first"===a.nameOrder?(0,t.jsxs)(t.Fragment,{
                    children:[(0,t.jsx)("span",{
                      className:"invite__name",children:a.groomFull
                    }),(0,t.jsx)("span",{
                      className:"invite__names-dot","aria-hidden":"true"
                    }),(0,t.jsx)("span",{
                      className:"invite__name",children:a.brideFull
                    })]
                  }):(0,t.jsxs)(t.Fragment,{
                    children:[(0,t.jsx)("span",{
                      className:"invite__name",children:a.brideFull
                    }),(0,t.jsx)("span",{
                      className:"invite__names-dot","aria-hidden":"true"
                    }),(0,t.jsx)("span",{
                      className:"invite__name",children:a.groomFull
                    })]
                  })
                })]
              })]
            })
          })]
        })]
      })
    })
  }function F({
    src:e,alt:s="",quote:a,sub:n,tall:r=!1
  }){
    return e?(0,t.jsxs)(b,{
      className:`band ${
        r?"band--tall":""
      }`.trim(),children:[(0,t.jsx)("img",{
        className:"band__img",src:e,alt:s,loading:"lazy"
      }),(a||n)&&(0,t.jsxs)("div",{
        className:"band__veil",children:[a&&(0,t.jsx)("p",{
          className:"band__quote ar",children:a
        }),n&&(0,t.jsx)("p",{
          className:"band__sub",children:n
        })]
      })]
    }):null
  }var O=e.i(887652),B=e.i(433768),z=e.i(310542),V=e.i(591994),U=e.i(895420);
  let H=["var(--rose)","var(--sage)","var(--coral)","var(--rose-dark)"];
  function G({
    event:e,index:s,total:a,scrollYProgress:n,nodeRef:r,accent:i
  }){
    let l=M[e.icon]||k,o=a>1?s/(a-1):0,c=(0,U.useTransform)(n,[o-.1,o],[0,1]),d=(0,O.useMotionValue)(0),h=(0,O.useMotionValue)(0),m=(0,V.useSpring)(d,{
      stiffness:220,damping:20
    }),u=(0,V.useSpring)(h,{
      stiffness:220,damping:20
    });
    return(0,t.jsxs)(x.motion.div,{
      className:`events__row ${
        s%2==0?"events__row--left":"events__row--right"
      }`,initial:{
        opacity:0,x:s%2==0?-50:50,scale:.94
      },whileInView:{
        opacity:1,x:0,scale:1
      },viewport:{
        once:!0,amount:.4
      },transition:{
        duration:.6,ease:[.22,1,.36,1]
      },children:[(0,t.jsx)(x.motion.div,{
        ref:r,className:"events__node",style:{
          "--lit":c,"--accent":i
        },initial:{
          scale:0
        },whileInView:{
          scale:1
        },viewport:{
          once:!0,amount:.6
        },transition:{
          type:"spring",stiffness:300,damping:14,delay:.12
        },children:(0,t.jsx)(l,{
          className:"events__node-icon"
        })
      }),(0,t.jsxs)(x.motion.div,{
        className:"card events__card",style:{
          "--accent":i,"--lit":c,rotateX:m,rotateY:u
        },whileHover:{
          y:-6
        },transition:{
          duration:.25
        },onMouseMove:e=>{
          let t=e.currentTarget.getBoundingClientRect(),s=(e.clientX-t.left)/t.width-.5,a=(e.clientY-t.top)/t.height-.5;
          h.set(8*s),d.set(-(8*a))
        },onMouseLeave:()=>{
          d.set(0),h.set(0)
        },children:[(0,t.jsxs)("p",{
          className:"events__when",children:[(0,t.jsx)("span",{
            className:"events__index",children:String(s+1).padStart(2,"0")
          }),e.date," · ",e.time]
        }),(0,t.jsx)("p",{
          className:"ar events__arabic",children:e.arabic
        }),(0,t.jsx)("h3",{
          className:"events__name",children:e.name
        }),(0,t.jsx)("p",{
          className:"events__subtitle",children:e.subtitle
        }),(0,t.jsx)("p",{
          className:"events__place",children:e.place
        }),e.mapsUrl&&(0,t.jsx)("a",{
          className:"events__map-link",href:e.mapsUrl,target:"_blank",rel:"noreferrer",children:"Get Directions"
        })]
      })]
    })
  }function Y({
    events:e,heading:a
  }){
    let n=(0,s.useRef)(null),r=(0,s.useRef)(null),i=(0,s.useRef)([]),l=(0,s.useRef)(0),[o,c]=(0,s.useState)([]),[d,h]=(0,s.useState)({
      w:760,h:900
    }),{
      scrollYProgress:m
    }=(0,z.useScroll)({
      target:n,offset:["start 75%","end 55%"]
    }),u=(0,U.useTransform)(m,[0,1],["0%","100%"]);
    (0,s.useLayoutEffect)(()=>{
      let e=()=>{
        let e=n.current;
        if(!e)return;
        let t=e.getBoundingClientRect(),s=i.current.map(e=>{
          if(!e)return null;
          let s=e.getBoundingClientRect();
          return{
            x:s.left-t.left+s.width/2,y:s.top-t.top+s.height/2
          }
        });
        s.every(Boolean)&&t.width>0&&(h({
          w:t.width,h:t.height
        }),c(s))
      };
      e();
      let t=new ResizeObserver(e);
      return n.current&&t.observe(n.current),window.addEventListener("resize",e),()=>{
        t.disconnect(),window.removeEventListener("resize",e)
      }
    },[e]);
    let p=(0,s.useMemo)(()=>(function(e){
      if(e.length<2)return"";
      let t=`M ${
        e[0].x
      } ${
        e[0].y
      }`;
      for(let s=1;
      s<e.length;
      s++){
        let a=e[s-1],n=e[s],r=(a.y+n.y)/2,i=s%2==0?1:-1;
        t+=` C ${
          a.x+22*i
        } ${
          r
        }, ${
          n.x+22*i
        } ${
          r
        }, ${
          n.x
        } ${
          n.y
        }`
      }return t
    })(o),[o]),f=(0,O.useMotionValue)(0),g=(0,O.useMotionValue)(0);
    return(0,s.useEffect)(()=>{
      if(!r.current)return;
      l.current=r.current.getTotalLength();
      let e=m.get(),t=r.current.getPointAtLength(Math.min(1,Math.max(0,e))*l.current);
      f.set(t.x),g.set(t.y)
    },[p]),(0,B.useMotionValueEvent)(m,"change",e=>{
      let t=r.current;
      if(!t||!l.current)return;
      let s=t.getPointAtLength(Math.min(1,Math.max(0,e))*l.current);
      f.set(s.x),g.set(s.y)
    }),(0,t.jsx)("section",{
      id:"events",className:"sec sec--alt sec--geo events",children:(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:a.eyebrow,title:a.title
        }),(0,t.jsxs)("div",{
          className:"events__list",ref:n,children:[(0,t.jsx)("div",{
            className:"events__track"
          }),(0,t.jsx)(x.motion.div,{
            className:"events__track-fill",style:{
              height:u
            }
          }),p&&(0,t.jsxs)("svg",{
            className:"events__path-svg",viewBox:`0 0 ${
              d.w
            } ${
              d.h
            }`,"aria-hidden":"true",children:[(0,t.jsx)("path",{
              ref:r,d:p,className:"events__path-bg"
            }),(0,t.jsx)(x.motion.path,{
              d:p,className:"events__path-fill",style:{
                pathLength:m
              }
            }),(0,t.jsxs)(x.motion.g,{
              style:{
                x:f,y:g
              },children:[(0,t.jsx)("circle",{
                r:"12",className:"events__flame-halo"
              }),(0,t.jsx)("circle",{
                r:"4.5",className:"events__flame-core"
              })]
            })]
          }),e.map((s,a)=>(0,t.jsx)(G,{
            event:s,index:a,total:e.length,scrollYProgress:m,accent:H[a%H.length],nodeRef:e=>i.current[a]=e
          },s.id))]
        })]
      })
    })
  }let q=e=>String(e).padStart(2,"0");
  function K(e){
    let t=new Date(e).getTime()-Date.now(),s=Math.max(0,t);
    return{
      done:t<=0,days:q(Math.floor(s/864e5)),hours:q(Math.floor(s/36e5%24)),minutes:q(Math.floor(s/6e4%60)),seconds:q(Math.floor(s/1e3%60))
    }
  }let Q={
    done:!1,days:"00",hours:"00",minutes:"00",seconds:"00"
  };
  function J({
    day:e
  }){
    let[a,n]=(0,s.useState)(Q);
    (0,s.useEffect)(()=>{
      n(K(e.iso));
      let t=setInterval(()=>n(K(e.iso)),1e3);
      return()=>clearInterval(t)
    },[e.iso]);
    let r=[{
      key:"days",label:"Days",value:a.days
    },{
      key:"hours",label:"Hours",value:a.hours
    },{
      key:"minutes",label:"Minutes",value:a.minutes
    },{
      key:"seconds",label:"Seconds",value:a.seconds
    }];
    return(0,t.jsxs)("section",{
      id:"countdown",className:"sec countdown",children:[(0,t.jsx)(w,{
        variant:"orbs",seed:6
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"Save The Date",title:a.done?"The day is here":"Counting Down"
        }),(0,t.jsxs)(b,{
          className:"countdown__panel",children:[(0,t.jsx)(N,{
            className:"countdown__crescent"
          }),(0,t.jsx)("div",{
            className:"countdown__row",children:r.map((e,s)=>(0,t.jsxs)("div",{
              className:"countdown__box",style:{
                "--stagger":s
              },children:[(0,t.jsx)("span",{
                className:"countdown__num",children:e.value.split("").map((e,s)=>(0,t.jsx)("span",{
                  className:"countdown__digit",children:e
                },`${
                  s
                }-${
                  e
                }`))
              }),(0,t.jsx)("span",{
                className:"countdown__label",children:e.label
              })]
            },e.key))
          }),(0,t.jsx)(_,{
            className:"countdown__rule"
          }),(0,t.jsxs)("p",{
            className:"countdown__note",children:["Until our ",e.countdownLabel," on ",e.weekday,", ",e.date," at ",e.nikahTime]
          }),(0,t.jsx)("p",{
            className:"ar countdown__dua",children:"إِنْ شَاءَ اللَّٰه"
          })]
        })]
      })]
    })
  }function X({
    data:e,photo:s
  }){
    let a;
    return(0,t.jsxs)("section",{
      id:"venue",className:"sec sec--alt sec--geo venue",children:[(0,t.jsx)(w,{
        variant:"orbs",seed:7
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"Where To Find Us",title:"The Venue"
        }),(0,t.jsxs)(b,{
          className:"card venue__card",children:[s&&(0,t.jsx)("img",{
            className:"venue__photo",src:s,alt:`${
              e.name
            } — the venue`,loading:"lazy",onError:e=>e.currentTarget.style.display="none"
          }),(0,t.jsxs)("div",{
            className:"venue__body",children:[(0,t.jsxs)("div",{
              className:"venue__info",children:[(0,t.jsx)("h3",{
                className:"venue__name",children:e.name
              }),(0,t.jsx)("p",{
                className:"venue__address",children:e.address
              }),e.note&&(0,t.jsxs)("p",{
                className:"venue__note",children:[(0,t.jsx)("span",{
                  className:"venue__note-dot"
                }),e.note]
              }),(0,t.jsx)("a",{
                className:"btn btn--fill venue__btn",href:e.mapsUrl,target:"_blank",rel:"noreferrer",children:"Open in Maps"
              })]
            }),(0,t.jsxs)("figure",{
              className:"venue__qr",children:[(0,t.jsx)("img",{
                src:(a=e.mapsUrl,`https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&color=4A3330&bgcolor=FFFFFF&data=${
                  encodeURIComponent(a)
                }`),alt:`QR code linking to ${
                  e.name
                } on Google Maps`,width:120,height:120,loading:"lazy"
              }),(0,t.jsx)("figcaption",{
                children:"Scan for directions"
              })]
            })]
          })]
        })]
      })]
    })
  }var Z=e.i(281010);
  let ee={
    name:"",phone:"",email:"",attending:"",guests:"1",message:"",website:""
  };
  function et({
    data:e,isPreview:a=!1
  }){
    let r,i=(0,n.useSiteId)(),[l,o]=(0,s.useState)(ee),[c,d]=(0,s.useState)(!1),[h,m]=(0,s.useState)(""),u=(0,Z.isRsvpFieldOn)(e.fields,"mobile"),x=(0,Z.isRsvpFieldOn)(e.fields,"email"),f=(0,Z.isRsvpFieldOn)(e.fields,"guestCount"),g=(0,Z.isRsvpFieldOn)(e.fields,"message"),j=e=>t=>{
      o(s=>({
        ...s,[e]:t.target.value
      })),"attending"===e&&m("")
    };
    async function y(e){
      if(e.preventDefault(),l.name.trim()){
        if(!l.attending)return void m("Please let us know whether you can join us.");
        if(l.website||(m(""),a))return void d(!0);
        try{
          if(!(await fetch(`/api/rsvp/${
            i
          }`,{
            method:"POST",headers:{
              "Content-Type":"application/json"
            },body:JSON.stringify({
              guestName:l.name.trim(),phone:l.phone.trim(),email:l.email.trim(),attending:l.attending,guestCount:"5+"===l.guests?5:Number(l.guests)||1,message:l.message.trim(),website:l.website
            })
          })).ok)throw Error("RSVP submission failed");
          d(!0)
        }catch{
          m("Something went wrong sending your RSVP. Please try again.")
        }
      }
    }let N="no"===l.attending;
    return(0,s.useEffect)(()=>{
      c&&!N&&(0,p.default)({
        particleCount:90,spread:100,startVelocity:38,origin:{
          x:.5,y:.4
        },colors:["#b3a05e","#d7c995","#858640","#ed8068"]
      })
    },[c]),(0,t.jsxs)("section",{
      id:"rsvp",className:"sec rsvp",children:[(0,t.jsx)(w,{
        variant:"dust",seed:8
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"Kindly Respond",title:"Will You Join Us?"
        }),(0,t.jsxs)(b,{
          as:"p",className:"lede rsvp__intro",children:[e.message,e.deadline?(0,t.jsxs)(t.Fragment,{
            children:[" ","Please reply by ",(0,t.jsx)("strong",{
              children:e.deadline
            }),"."]
          }):null]
        }),c?(0,t.jsxs)(b,{
          className:"card card--framed rsvp__card rsvp__done",show:!0,children:[(0,t.jsx)("span",{
            className:"rsvp__tick","aria-hidden":"true",children:(0,t.jsx)("svg",{
              viewBox:"0 0 40 40",fill:"none",children:(0,t.jsx)("path",{
                d:"M11 20.5 17.5 27 29 14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"
              })
            })
          }),(0,t.jsx)("h3",{
            className:"rsvp__done-title",children:N?"Thank you for letting us know":"Jazak Allah Khair"
          }),(0,t.jsx)("p",{
            className:"rsvp__done-text",children:N?"You will be missed on the day — please keep us in your duas.":"Your response has been noted. We cannot wait to celebrate with you, In Sha Allah."
          }),(0,t.jsx)("button",{
            type:"button",className:"rsvp__again",onClick:()=>{
              o(ee),m(""),d(!1)
            },children:"Send another response"
          })]
        }):(0,t.jsxs)(b,{
          as:"form",className:"card rsvp__card",onSubmit:y,children:[(r=(0,t.jsxs)("label",{
            className:"rsvp__field",children:[(0,t.jsx)("span",{
              children:"Full Name"
            }),(0,t.jsx)("input",{
              type:"text",required:!0,placeholder:"Your name",value:l.name,onChange:j("name")
            })]
          }),u?(0,t.jsxs)("div",{
            className:"rsvp__row",children:[r,(0,t.jsxs)("label",{
              className:"rsvp__field",children:[(0,t.jsx)("span",{
                children:"Mobile Number"
              }),(0,t.jsx)("input",{
                type:"tel",required:!0,placeholder:"+91 00000 00000",value:l.phone,onChange:j("phone")
              })]
            })]
          }):r),x&&(0,t.jsxs)("label",{
            className:"rsvp__field",children:[(0,t.jsx)("span",{
              children:"Email Address"
            }),(0,t.jsx)("input",{
              type:"email",placeholder:"you@example.com",value:l.email,onChange:j("email")
            })]
          }),(0,t.jsxs)("fieldset",{
            className:"rsvp__group",children:[(0,t.jsx)("legend",{
              children:"Will you attend?"
            }),(0,t.jsx)("div",{
              className:"rsvp__options",children:[{
                v:"yes",label:"Joyfully accept"
              },{
                v:"no",label:"Regretfully decline"
              }].map(e=>(0,t.jsxs)("label",{
                className:`rsvp__option ${
                  l.attending===e.v?"is-on":""
                }`,children:[(0,t.jsx)("input",{
                  type:"radio",name:"attending",value:e.v,checked:l.attending===e.v,onChange:j("attending")
                }),(0,t.jsx)("span",{
                  className:"rsvp__radio"
                }),e.label]
              },e.v))
            }),h&&(0,t.jsx)("p",{
              className:"rsvp__error",role:"alert",children:h
            })]
          }),f&&(0,t.jsxs)("fieldset",{
            className:"rsvp__group",children:[(0,t.jsx)("legend",{
              children:"Number of guests (including you)"
            }),(0,t.jsx)("div",{
              className:"rsvp__pills",children:e.guestOptions.map(e=>(0,t.jsxs)("label",{
                className:`rsvp__pill ${
                  l.guests===e?"is-on":""
                }`,children:[(0,t.jsx)("input",{
                  type:"radio",name:"guests",value:e,checked:l.guests===e,onChange:j("guests")
                }),e]
              },e))
            })]
          }),g&&(0,t.jsxs)("label",{
            className:"rsvp__field",children:[(0,t.jsx)("span",{
              children:"Message for the couple (optional)"
            }),(0,t.jsx)("textarea",{
              rows:"3",placeholder:"Leave your wishes here...",value:l.message,onChange:j("message")
            })]
          }),(0,t.jsxs)("div",{
            className:"rsvp__trap","aria-hidden":"true",children:[(0,t.jsx)("label",{
              htmlFor:"rsvp-website",children:"Website"
            }),(0,t.jsx)("input",{
              id:"rsvp-website",type:"text",tabIndex:-1,autoComplete:"off",value:l.website,onChange:j("website")
            })]
          }),(0,t.jsx)("button",{
            type:"submit",className:"btn btn--fill rsvp__submit",children:"Send RSVP"
          })]
        })]
      })]
    })
  }function es({
    data:e
  }){
    return(0,t.jsxs)("section",{
      id:"blessings",className:"sec sec--alt sec--geo blessings",children:[(0,t.jsx)(w,{
        variant:"petals",seed:9
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"With Love",title:"Your Blessings"
        }),(0,t.jsx)(b,{
          as:"p",className:"lede blessings__intro",children:e.intro
        }),(0,t.jsx)("div",{
          className:"blessings__grid",children:e.items.map((e,s)=>{
            let a=$[e.icon]||S;
            return(0,t.jsxs)(b,{
              className:"card card--framed blessings__card",delay:.1*s,children:[(0,t.jsx)("span",{
                className:"blessings__badge",children:(0,t.jsx)(a,{
                  className:"blessings__icon"
                })
              }),(0,t.jsx)("h3",{
                className:"blessings__title",children:e.title
              }),(0,t.jsx)("p",{
                className:"blessings__text",children:e.text
              })]
            },e.title)
          })
        })]
      })]
    })
  }function ea({
    data:e
  }){
    return(0,t.jsxs)("section",{
      id:"contact",className:"sec contact",children:[(0,t.jsx)(w,{
        variant:"leaves",seed:10
      }),(0,t.jsxs)("div",{
        className:"wrap",children:[(0,t.jsx)(R,{
          eyebrow:"Get In Touch",title:"Hosts & Contact"
        }),(0,t.jsx)("div",{
          className:(0,c.hostGridClass)("contact__grid",e.length),children:e.map((e,s)=>(0,t.jsxs)(b,{
            className:"card card--framed contact__card",delay:.1*s,children:[(0,t.jsx)("p",{
              className:"contact__label",children:e.label
            }),(0,t.jsx)("h3",{
              className:"contact__person",children:e.person
            }),(0,t.jsx)("p",{
              className:"contact__parents",children:e.parents
            }),e.phones.map(e=>(0,t.jsx)("a",{
              className:"btn btn--line contact__phone",href:`tel:${
                e.replace(/\s/g,"")
              }`,children:e
            },e))]
          },e.key))
        })]
      })]
    })
  }function en({
    couple:e,data:s
  }){
    return(0,t.jsxs)("footer",{
      className:"footer",children:[(0,t.jsx)(w,{
        variant:"sparkle",seed:11
      }),(0,t.jsx)("span",{
        className:"footer__skyline","aria-hidden":"true"
      }),(0,t.jsxs)("div",{
        className:"wrap footer__inner",children:[(0,t.jsx)(b,{
          children:(0,t.jsx)(C,{
            initials:e.initials,className:"footer__monogram"
          })
        }),(0,t.jsx)(b,{
          as:"h2",className:"footer__names",delay:.08,children:"groom-first"===e.nameOrder?(0,t.jsxs)(t.Fragment,{
            children:[e.groom," ",(0,t.jsx)("span",{
              className:"script",children:"&"
            })," ",e.bride]
          }):(0,t.jsxs)(t.Fragment,{
            children:[e.bride," ",(0,t.jsx)("span",{
              className:"script",children:"&"
            })," ",e.groom]
          })
        }),(0,t.jsx)(b,{
          delay:.14,children:(0,t.jsx)(_,{
            className:"footer__rule"
          })
        }),(0,t.jsx)(b,{
          as:"p",className:"footer__message",delay:.18,children:s.message
        }),(0,t.jsxs)(b,{
          className:"footer__dua",delay:.24,children:[(0,t.jsx)("span",{
            className:"ar footer__dua-ar",children:s.duaArabic
          }),(0,t.jsx)("span",{
            className:"footer__dua-latin",children:s.dua
          })]
        }),(0,t.jsxs)(b,{
          className:"footer__meta",delay:.3,children:[(0,t.jsx)("span",{
            className:"footer__hash",children:e.hashtag
          }),(0,t.jsx)("span",{
            className:"footer__meta-dot"
          }),(0,t.jsx)("span",{
            children:s.dateLine
          })]
        })]
      })]
    })
  }let er=o.MUSLIM_MODERN_FAMILY_SECTIONS.map(e=>e.id);
  function ei(){
    let{
      couple:e
    }=(0,a.useWeddingData)();
    return(0,s.useEffect)(()=>{
      let[t,s]="groom-first"===e.nameOrder?[e.groomName,e.brideName]:[e.brideName,e.groomName];
      document.title=`${
        t
      } & ${
        s
      } — Wedding Invitation`
    },[e.groomName,e.brideName,e.nameOrder]),null
  }function el({
    isPreview:e
  }){
    let n,u=(0,a.useWeddingData)(),p=(n=(0,a.useWeddingData)(),(0,s.useMemo)(()=>{
      let e=n.couple.groomName,t=n.couple.brideName,s=n.couple.nameOrder??"groom-first",[a,r]="groom-first"===s?[e,t]:[t,e],i=new Date(n.weddingDateTime),l=i.toLocaleDateString("en-US",{
        day:"numeric",month:"long",year:"numeric"
      }),o=n.gallery??[];
      return{
        photos:{
          venueCard:o[2]?.url||"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",bandOne:{
            src:o[0]?.url||"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-hero.jpg",quote:"بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا",sub:o[0]?.caption||"May Allah bless you both"
          },bandTwo:{
            src:o[1]?.url||"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",quote:"",sub:o[1]?.caption||`${
              e
            } & ${
              t
            } \xb7 ${
              l
            }`
          }
        },couple:{
          groom:e,bride:t,groomFull:e,brideFull:t,nameOrder:s,hashtag:n.couple.hashtag??`#${
            e
          }Weds${
            t
          }`,initials:[a?.trim()?.[0]?.toUpperCase()??"A",r?.trim()?.[0]?.toUpperCase()??"B"]
        },day:{
          weekday:i.toLocaleDateString("en-US",{
            weekday:"long"
          }),date:l,dateShort:`${
            i.getDate()
          } \xb7 ${
            i.getMonth()+1
          } \xb7 ${
            i.getFullYear()
          }`,nikahTime:n.ceremonyStart??i.toLocaleTimeString("en-US",{
            hour:"numeric",minute:"2-digit"
          }),city:n.venue.city??"",iso:n.weddingDateTime,countdownLabel:n.countdownLabel??"Nikah"
        },hero:{
          bismillah:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",eyebrow:n.heroEyebrow?.trim()||"Together with our families",intro:"We invite you to celebrate our",occasion:n.heroOccasion??"Nikah & Walima",video:{
            desktop:n.heroBackground?.url??"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16.mp4?v=2",mobile:n.heroBackground?.responsive?.mobile?.url??n.heroBackground?.url??"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9.mp4?v=2"
          },frame:{
            desktop:n.heroBackground?.frame??"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16-frame.jpg",mobile:n.heroBackground?.responsive?.mobile?.frame??n.heroBackground?.frame??"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9-frame.jpg"
          }
        },verse:{
          arabic:"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوٓا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",translation:"And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them;
           and He placed between you affection and mercy.",reference:"Surah Ar-Rum · 30:21"
        },invite:{
          greeting:[n.story?.greetingLine1,n.story?.greetingLine2].filter(Boolean).join(" ")||"Dear Family & Friends",message:n.story?.message??"",signature:"With love,"
        },eventsHeading:{
          eyebrow:n.eventsHeading?.eyebrow?.trim()||"Celebrating Together",title:n.eventsHeading?.title?.trim()||"Wedding Events"
        },events:n.events.map(e=>{
          let t=(e.name??"").trim().toLowerCase().split(/[\s·—-]+/)[0];
          return{
            id:e.id,photo:"",name:e.name,arabic:d[t]??"",subtitle:e.detail??"",date:e.date,time:e.time??"",place:e.location??"",mapsUrl:e.mapsUrl??"",icon:h[t]??"rings"
          }
        }),venue:{
          name:n.venue.name,address:n.venue.address,mapsUrl:n.venue.mapsUrl??"",note:n.venue.note??""
        },scratch:{
          title:"Scratch & Reveal",hint:"Rub the foil with your finger or cursor",reveal:"We cannot wait to see you there"
        },rsvp:{
          enabled:n.rsvp?.enabled??!0,deadline:n.rsvp?.deadline??n.rsvpDeadline??"",message:n.rsvp?.customMessage??"We have saved you a seat — kindly let us know if you can join us.",guestOptions:["1","2","3","4","5+"],fields:n.rsvp?.fields
        },blessings:{
          intro:"Your presence and your duas are the greatest gift we could ask for. If you would still like to send something, a small note is all we ask.",items:(n.gifts??[]).map((e,t)=>({
            title:e.title,text:e.text,icon:t%2==0?"heart":"hands"
          }))
        },contact:(0,c.resolveHostEntries)(n.hosts,n.couple).map(e=>({
          key:e.key,label:e.relation,person:e.person,parents:e.subtitle??"",phones:e.phones
        })),footer:{
          message:n.footer?.message??"",duaArabic:"آمِين",dua:"Ameen",dateLine:[l,n.venue.name,n.venue.city].filter(Boolean).join(" · ")
        }
      }
    },[n])),x=(0,r.showSamplePhotos)(u)||(u.gallery?.[2]?.url??"").trim()?p.photos.venueCard:"",f=(0,s.useRef)(null),[g,j]=(0,s.useState)(!1);
    (0,l.useScrollLock)(!g,".tmpl-zaytoon");
    let b={
      scratchReveal:()=>(0,t.jsx)(I,{
        data:p.scratch,day:p.day,couple:p.couple
      },"scratchReveal"),envelop:()=>(0,t.jsx)(D,{
        data:p.invite,couple:p.couple
      },"envelop"),timeline:()=>(0,t.jsx)(Y,{
        events:p.events,heading:p.eventsHeading
      },"timeline"),countdown:()=>(0,t.jsx)(J,{
        day:p.day
      },"countdown"),venue:()=>(0,t.jsx)(X,{
        data:p.venue,photo:x
      },"venue"),contact:()=>p.rsvp.enabled?(0,t.jsx)(et,{
        data:p.rsvp,isPreview:e
      },"contact"):null,gifts:()=>(0,t.jsx)(es,{
        data:p.blessings
      },"gifts"),hosts:()=>(0,t.jsx)(ea,{
        data:p.contact
      },"hosts"),footer:()=>(0,t.jsx)(en,{
        couple:p.couple,data:p.footer
      },"footer")
    },y=(0,o.resolveSectionOrder)(u.sectionOrder,er),w=new Set(u.hiddenSections),N=[];
    for(let e of y)w.has(e)||(N.push(b[e]?.()),"envelop"===e&&N.push((0,t.jsx)(F,{
      ...p.photos.bandOne,alt:""
    },"band-one")),"contact"===e&&N.push((0,t.jsx)(F,{
      ...p.photos.bandTwo,alt:""
    },"band-two")));
    return(0,t.jsxs)("div",{
      className:"tmpl-zaytoon",children:[(0,t.jsx)(i.default,{
        ref:f,music:u.music,defaultSrc:"https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/music.mp3"
      }),g&&(0,t.jsx)(m,{
        audioRef:f
      }),(0,t.jsx)("a",{
        href:"#top",className:"skip-link",children:"Skip to content"
      }),(0,t.jsxs)("main",{
        children:[(0,t.jsx)(P,{
          couple:p.couple,day:p.day,hero:p.hero,audioRef:f,onOpen:function(){
            j(!0)
          },showRsvp:p.rsvp.enabled&&!w.has("contact"),showEvents:!w.has("timeline")
        }),(0,t.jsx)(A,{
          data:p.verse
        }),N]
      })]
    })
  }e.s(["default",0,function({
    data:e,siteId:s,isPreview:r
  }){
    return(0,t.jsx)(a.WeddingDataProvider,{
      data:e,children:(0,t.jsxs)(n.SiteIdProvider,{
        siteId:s,children:[(0,t.jsx)(ei,{
          
        }),(0,t.jsx)(el,{
          isPreview:r
        })]
      })
    })
  }],309674)