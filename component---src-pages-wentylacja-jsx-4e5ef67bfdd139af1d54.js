"use strict";(self.webpackChunkkalkulatorpro=self.webpackChunkkalkulatorpro||[]).push([[816],{7220:function(e,t,n){n.r(t),n.d(t,{Head:function(){return I},default:function(){return F}});var a=n(1703),r=n(9503),l=n(2751),m=n(7294),i=n(384),c=n(5142),o=n(9803),u=n(5604),s=n(3854),E=n(3847),p=n(6547),Z={py:1,px:2},b={fontSize:"0.8rem",textTransform:"uppercase",mb:2,mt:1},y=function(){var e=(0,m.useState)(""),t=e[0],n=e[1],a=(0,m.useState)(""),r=a[0],i=a[1],c=(0,m.useState)(""),o=c[0],y=c[1],w=(0,m.useState)(""),d=w[0],x=w[1],z=(0,m.useState)(""),f=z[0],k=z[1],v=(0,m.useState)(""),P=v[0],g=v[1];(0,m.useEffect)((function(){return""!==r&&Number(t)>=Number(r)?(x(""),void k("temp wyw. musi być większa od zewnętrznej")):(k(""),""!==r&&Number(o)>Number(r)?(x(""),void g("temp nawiewu nie moze być większa od wywiewu")):""!==o&&Number(o)<Number(t)?(x(""),void g("temp nawiewu nie moze być mniejsza od zewnętrznej")):(g(""),void(""!==t&&""!==r&&""!==o?(k(""),x((0,E.yS)(t,r,o))):x(""))))}),[t,r,o]);return m.createElement(m.Fragment,null,m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:Z},m.createElement(s.Z,{sx:b},"Sprawność wymiennika"),m.createElement(l.ZP,{container:!0,spacing:1},m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{value:t,onChange:function(e){n(e)},label:"Temp. zew. °C"})),m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{value:r,helperText:f,onChange:function(e){i(e)},label:"Temp. wyw. °C"})),m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{helperText:P,value:o,onChange:function(e){y(e)},label:"Temp. naw °C"}))))),""!==d&&m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:Z},m.createElement(s.Z,{variant:"body2"},"Sprawność wymiennika wynosi",m.createElement("strong",null," "+(0,E.ri)(d,1)+"%")))))},w={py:1,px:2},d={fontSize:"0.8rem",textTransform:"uppercase",mb:2,mt:1},x=function(){var e=(0,m.useState)(""),t=e[0],n=e[1],a=(0,m.useState)(""),r=a[0],i=a[1],c=(0,m.useState)(""),o=c[0],Z=c[1],b=(0,m.useState)(""),y=b[0],x=b[1];(0,m.useEffect)((function(){Z(""!==t&&""!==r&&""!==y?(0,E.sJ)(t,r,y):"")}),[t,r,y]);return m.createElement(m.Fragment,null,m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:w},m.createElement(s.Z,{sx:d},"Temperatura za wymiennikiem"),m.createElement(l.ZP,{container:!0,spacing:1},m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{value:t,onChange:function(e){n(e)},label:"Temp. zew. °C"})),m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{value:r,onChange:function(e){i(e)},label:"Temp. wyw. °C"})),m.createElement(l.ZP,{xs:4,item:!0},m.createElement(p.Z,{value:y,onChange:function(e){x((0,E.A_)(e))},label:"sprawność %"}))))),""!==o&&m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:w},m.createElement(s.Z,{variant:"body2"},"Temperatura za wymiennikiem",m.createElement("strong",null," "+(0,E.ri)(o,1)+" °C")))))},z=function(){return m.createElement(l.ZP,{container:!0,spacing:1},m.createElement(x,null),m.createElement(y,null))},f={py:1,px:2},k={fontSize:"0.8rem",textTransform:"uppercase",mb:2,mt:1},v=function(){var e=(0,m.useState)(""),t=e[0],n=e[1],a=(0,m.useState)(""),r=a[0],i=a[1],c=(0,m.useState)(""),o=c[0],Z=c[1],b=(0,m.useState)(""),y=b[0],w=b[1],d=(0,m.useState)(null),x=d[0],z=d[1];(0,m.useEffect)((function(){z(""!==t&&0!==t&&""!==o&&""!==y?E.Eu(t,o,y):null)}),[t,o,y]);return m.createElement(m.Fragment,null,m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:f},m.createElement(s.Z,{sx:k},"Dobór kanału prostokątnego"),m.createElement(l.ZP,{container:!0,spacing:1,item:!0,xs:12},m.createElement(l.ZP,{item:!0,xs:6},m.createElement(p.Z,{helperText:t&&!o?"Podaj wymiar":"",label:"Bok A",value:o,onChange:function(e){Z(e)}})),m.createElement(l.ZP,{item:!0,xs:6},m.createElement(p.Z,{helperText:t&&!y?"Podaj wymiar":"",label:"Bok B",value:y,onChange:function(e){w(e)}})),m.createElement(l.ZP,{item:!0,xs:5},m.createElement(p.Z,{label:"Przepływ m3/h",value:t,onChange:function(e){i(E.Cx(e)),n(e)}})),m.createElement(l.ZP,{sx:{textAlign:"center"},item:!0,xs:2},m.createElement(s.Z,{variant:"body2",sx:{mt:1.5}},"Lub")),m.createElement(l.ZP,{item:!0,xs:5},m.createElement(p.Z,{label:"Przepływ dm3/s",value:r,onChange:function(e){n(E.hi(e)),i(e)}}))))),x&&m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:f},m.createElement(s.Z,{sx:Object.assign({},k,{mb:0})},"Wyniki"),m.createElement(s.Z,{variant:"body1"},"Dla przepływu",m.createElement("strong",null," "+t+" m3/h ~ "+r+" dm3/s "),"w kanale"," ",m.createElement("strong",null,o,"x",y)," ","mm","("+E.E2(o,y),"m",m.createElement("sup",null,"2"),")"),m.createElement(s.Z,{variant:"body1"},"prędkość wynosi",m.createElement("strong",null,m.createElement("u",null," ",E.ri(x,2)," m/s"))))))},P=n(8962),g=n(5219),h={py:1,px:2},S={fontSize:"0.8rem",textTransform:"uppercase",mb:2,mt:1},j=function(){var e=(0,m.useState)(""),t=e[0],n=e[1],a=(0,m.useState)(""),r=a[0],i=a[1],c=(0,m.useState)(null),o=c[0],Z=c[1];(0,m.useEffect)((function(){Z(""!==t&&0!==t?E.KJ(t):null)}),[t]);return m.createElement(m.Fragment,null,m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:h},m.createElement(s.Z,{sx:S},"Automatyczny dobór kanału okrągłego"),m.createElement(l.ZP,{container:!0,spacing:1,item:!0,xs:12},m.createElement(l.ZP,{item:!0,xs:5},m.createElement(p.Z,{label:"Przepływ m3/h",value:t,onChange:function(e){i(E.Cx(e)),n(e)}})),m.createElement(l.ZP,{sx:{textAlign:"center"},item:!0,xs:2},m.createElement(s.Z,{variant:"body2",sx:{mt:1.5}},"Lub")),m.createElement(l.ZP,{item:!0,xs:5},m.createElement(p.Z,{label:"Przepływ dm3/s",value:r,onChange:function(e){n(E.hi(e)),i(e)}}))))),m.createElement(g.Z,{results:o}),o&&m.createElement(l.ZP,{item:!0,xs:12},m.createElement(u.Z,{elevation:2,sx:h},m.createElement(s.Z,{sx:Object.assign({},S,{mb:0})},"Wyniki"),m.createElement(s.Z,{variant:"body2"},"Dla przepływu",m.createElement("strong",null," "+t+" m3/h ~ "+r+" dm3/s "),"dobrano:"),m.createElement(P.Z,{isSpiro:!0,results:o}))))},C=function(){return m.createElement(l.ZP,{container:!0,spacing:1},m.createElement(j,null),m.createElement(v,null))},T=n(9299),W=n(2388),O=n(8002),A=n(8137),D=function(){return m.createElement(T.Z,{sx:{my:{xs:2,md:4},display:"flex",gap:1,flexWrap:"wrap"}},m.createElement(O.Z,{label:"TYPOSZEREGI",title:"Typoszeregi rur"},m.createElement(A.Z,{header:"Kanały Spiro",pipeObject:W.OW})),m.createElement(O.Z,{maxWidth:"md",label:"POMOC",title:"Instrukcja"},m.createElement(s.Z,{variant:"body1",mb:2},"Kanały wentylacyjne dobierane są w oparciu o kryterium prędkości."),m.createElement(s.Z,{variant:"body1",mb:2},"Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha. Przyjęto chropowatość bezwględną dla stali ocynkowanej."),m.createElement(s.Z,{variant:"body1",mb:2},"Podane dobory powinny zostać przeanalizowane przez projektanta i dostosowane odpowiednio do danej sytuacji projektowej.")),m.createElement(O.Z,{maxWidth:"md",label:"WIEDZA",title:"Wiedza"},m.createElement(s.Z,{variant:"body1",mb:2},"Kryterium prędkość dla doboru kanałów wynosi 5,5 m/s"),m.createElement(s.Z,{variant:"body1",mb:2},"Zalecana prędkość powietrza przy czerpni nie więcej niż 2,5 m/s"),m.createElement(s.Z,{variant:"body1",mb:2},"Zalecana prędkość powietrza przy wyrzutni nie więcej niż 4,0 m/s"),m.createElement(s.Z,{variant:"body1",mb:2},"W przypadku kanałów w obiektach przemysłowych prędkości powietrza w kanałach mogą być większe, rzędu 6-10 m/s"),m.createElement(s.Z,{variant:"body1",mb:2},"Dla kanałów przy nawiewnikach zaleca się prędkości mniejsze 3-4 m/s")))},N=[{label:"Przewody",component:m.createElement(C,null)},{label:"Odzysk ciepła",component:m.createElement(z,null)}],F=function(){var e=(0,m.useState)(0),t=e[0],n=e[1],i=(0,a.Z)((function(e){return e.breakpoints.up("md")}))?"vertical":"horizontal";return m.createElement(r.Z,{sx:{mt:2,px:1},maxWidth:"md"},m.createElement(l.ZP,{container:!0,spacing:1},m.createElement(l.ZP,{item:!0,xs:12,md:2},m.createElement(c.Z,{orientation:i,tab:t,setTab:n,tabItems:N})),m.createElement(l.ZP,{item:!0,xs:12,md:10},N.map((function(e,n){return m.createElement(o.Z,{key:e.label,index:n,value:t},e.component)})),m.createElement(D,null))))},I=function(){return m.createElement(i.H,{title:"wentylacja"})}}}]);
//# sourceMappingURL=component---src-pages-wentylacja-jsx-4e5ef67bfdd139af1d54.js.map