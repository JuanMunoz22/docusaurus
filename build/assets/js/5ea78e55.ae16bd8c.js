"use strict";(self.webpackChunkdocumentacion_bm=self.webpackChunkdocumentacion_bm||[]).push([[1266],{7494:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=a(4848),r=a(8453);const i={sidebar_position:3},o="Instalar DTE Manager",t={id:"TI/QAD/instalarDteManager",title:"Instalar DTE Manager",description:"Es importante mencionar que antes de realizar esta instalaci\xf3n no deben existir instalaciones previas de QAD en el equipo. Si ese es el caso se deben desintalar y eliminar todas las instalaciones anteriores.",source:"@site/docs/TI/QAD/instalarDteManager.md",sourceDirName:"TI/QAD",slug:"/TI/QAD/instalarDteManager",permalink:"/docs/TI/QAD/instalarDteManager",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Crear usuario WMS",permalink:"/docs/TI/QAD/crearUsuarioWms"},next:{title:"Administrador Conexiones",permalink:"/docs/TI/QAD/PTS/administradorConexiones"}},l={},d=[];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"instalar-dte-manager",children:"Instalar DTE Manager"}),"\n",(0,s.jsx)(n.p,{children:"Es importante mencionar que antes de realizar esta instalaci\xf3n no deben existir instalaciones previas de QAD en el equipo. Si ese es el caso se deben desintalar y eliminar todas las instalaciones anteriores."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["El primer paso a realizar antes de instalar el plugin DTE Manager es instalar Java en el equipo. Desde esta web podemos descargar su version mas actual ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://www.java.com/es/download/ie_manual.jsp",children:"https://www.java.com/es/download/ie_manual.jsp"})}),", tambien lo podemos descargar desde ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1JDi7yKUzFHSGpz09nHLkDIpTA1ynEM4L/view?usp=drive_link",children:"aqui"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"para realizar esta instalar solo debemos ejecutar como administrador su instalador y seguir sus pasos."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Agregar a los sitios de confianza de java las rutas de QAD."}),"\n",(0,s.jsxs)(n.p,{children:["Para eso debemos buscar ",(0,s.jsx)(n.strong,{children:"Configurar Java en nuestro equipo"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717608179/configurarJava_t2hvik.png",alt:"Animacion",title:"configurarJava"})}),"\n",(0,s.jsxs)(n.p,{children:["Luego de eso nos dirigimos a la pesta\xf1a ",(0,s.jsx)(n.strong,{children:"seguridad"})," y presionamos en ",(0,s.jsx)(n.strong,{children:"Editar lista de sitios..."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717608377/sitiosConfianzaJava_yhfdgv.png",alt:"Animacion",title:"sitiosConfinza"})}),"\n",(0,s.jsx)(n.p,{children:"En esta pesta\xf1a debemos agregar la siguientes rutas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-pilo.bredenmaster.com:8080/qadhome/",children:"http://qad-pilo.bredenmaster.com:8080/qadhome/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-prod.bredenmaster.com:8080/qadhome/",children:"http://qad-prod.bredenmaster.com:8080/qadhome/"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717608909/listasitios_jndrud.png",alt:"Animacion",title:"listasitios"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Descargar el archivo ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"InternetExplorer.vbs"})})," desde ",(0,s.jsx)(n.a,{href:"https://drive.google.com/file/d/1mvYkN7a113aHcfxYx4XE0NWz9MJju9Yz/view?usp=drive_link",children:"aqui"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Actualmente windows ya no tiene soporte soporte para internet explorer, el cual es necesario para reinstalar QAD, por lo cual debemos ejecutar el script ",(0,s.jsx)(n.strong,{children:"InternetExplorer.vbs"})," para asi ejecutar la version antigua de internet explorar."]}),"\n",(0,s.jsxs)(n.p,{children:["Para ejecutar este script debemos buscar ",(0,s.jsx)(n.strong,{children:"CMD"})," en nuestro equipo y ejecutarlo como administrador."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717694872/cmd_outqil.png",alt:"Animacion",title:"buscaCMD"})}),"\n",(0,s.jsxs)(n.p,{children:["Luego de eso buscamos la ruta en la cual tenemos nuestro archivo ",(0,s.jsx)(n.strong,{children:"InternetExplorer.vbs"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717695020/rutaIEvbs_dntbmr.png",alt:"Animacion",title:"rutaIEvbs"})}),"\n",(0,s.jsxs)(n.p,{children:["Buscamos la ruta en nuestro ",(0,s.jsx)(n.strong,{children:"CMD"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    //En <ruta> ingresamos la ruta en la cual esta nuestro archivo \r\n    cd <ruta>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Luego de eso ingresamos en la consola el nombre del script, esto nos abrira Internet Explorer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    InternetExplorer.vbs\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717695633/IE_mqkfqi.png",alt:"Animacion",title:"IE"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configurar vista compatibilidad de Internet Explorer."}),"\n",(0,s.jsx)(n.p,{children:"Para configurar esto debemos ir a la pesta\xf1a que muestra la imagen en Internet Explorer."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717771395/configurarVistaCompatibilidad_efgdqf.png",alt:"Animacion",title:"configurarVistaCompatibilidad"})}),"\n",(0,s.jsx)(n.p,{children:"Luego de ese debemos agregar las rutas del ambiente de QAD que instalaremos."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-pilo.bredenmaster.com:8080/qadhome/",children:"http://qad-pilo.bredenmaster.com:8080/qadhome/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-prod.bredenmaster.com:8080/qadhome/",children:"http://qad-prod.bredenmaster.com:8080/qadhome/"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1717771542/configurarVistaCompatibilidad2_sx6pwr.png",alt:"Animacion",title:"configurarVistaCompatibilidad2"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Agregar a sitios de confianza de Internet Explorer."}),"\n",(0,s.jsxs)(n.p,{children:["Para agregar a nuestros sitios de confianza debemos ingresar a ",(0,s.jsx)(n.strong,{children:"opciones de internet"})," como se muestra en la imagen."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1718055445/1-IEopcionesInternet_pfp5c4.png",alt:"Animacion",title:"IEOpcionesInternet"})}),"\n",(0,s.jsxs)(n.p,{children:["Luego vamos a la pesta\xf1a ",(0,s.jsx)(n.strong,{children:'"Seguridad"'})," y dejamos el nivel de seguridad en medio."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1718055561/2-Seguridad_pyiija.png",alt:"Animacion",title:"nivelSeguridad"})}),"\n",(0,s.jsxs)(n.p,{children:["Ahora debemos ir a la pesta\xf1a ",(0,s.jsx)(n.strong,{children:'"Privacidad"'}),". Aqui debemos tener inactivo el checkbox para bloquear las ventanas emergentes. Posterior a eso presionamos en el boton ",(0,s.jsx)(n.strong,{children:"Sitios"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1718055740/2-Privacidad_h733sr.png",alt:"Animacion",title:"privacidad"})}),"\n",(0,s.jsxs)(n.p,{children:["Ya por ultimo, debemos ingresar la ruta de confianza y presionar en ",(0,s.jsx)(n.strong,{children:"permitir"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-pilo.bredenmaster.com:8080/qadhome/",children:"http://qad-pilo.bredenmaster.com:8080/qadhome/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://qad-prod.bredenmaster.com:8080/qadhome/",children:"http://qad-prod.bredenmaster.com:8080/qadhome/"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1718055999/3-sitiosConfianza_nk5tex.png",alt:"Animacion",title:"sConfianza"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Desactivar Antivirus"}),"\n",(0,s.jsx)(n.p,{children:"Para continuar con la instalaci\xf3n del plugin se debe desactivar el antivirus. Para esto se debe primeramente se debe ingresar el codigo para desactivarlo."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1719845329/sophos_owwlfo.png",alt:"Animacion",title:"sophos"})}),"\n",(0,s.jsx)(n.p,{children:"Luego de eso debemos desactivar todas las opciones."}),"\n",(0,s.jsx)(n.p,{children:"[IMAGEN AQUI]"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Instalar QAD"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copiar Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Luego de la instalaci\xf3n de QAD debemos ir a la ruta en la cual instalamos QAD y copiar la carpeta de plugin que se puede descargar desde ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://drive.google.com/drive/folders/17svGWDPnskGQBBwVXORy6cHN1z3BrzXw?usp=drive_link",children:"aqui"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1719846665/plugins_yjwmav.png",alt:"Animacion",title:"plugins"})}),"\n",(0,s.jsx)(n.p,{children:"Una vez copiados los plugins ejecutamos QAD como administrador."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1719846925/ejecutarAdministrador_cuccok.png",alt:"Animacion",title:"pluginsAdministrador"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Validar correcta instalaci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Para validar la correcta instalaci\xf3n de QAD debemos ir al modulo ",(0,s.jsx)(n.strong,{children:"28.3.10.1"}),', presionamos click derecho sobre cualquier registro y seleccionamos la opci\xf3n "Modificar Cuentas y/o Recibos de compra".']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1719847094/dteManager_wg7p6d.png",alt:"Animacion",title:"dteManager"})}),"\n",(0,s.jsx)(n.p,{children:"Con esto solo debemos validar que se abra la ventana emergente, si la accion se realiza correctamente el plugin estara bien instalado."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://res.cloudinary.com/dl7wpmele/image/upload/v1719847277/dteemergente_hojvad.png",alt:"Animacion",title:"dteEmergente"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>t});var s=a(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);