import React from "react"
import './App-style.css'
import { Banner } from "../Components/Sections/Banner/banner.jsx"
import { Header } from "../Components/Sections/Header/header.jsx"
import { Menu } from "../Components/Sections/Menu/menu.jsx"
import { BannerCachos } from "../Components/Sections/Cachos/Banner-Cachos/banner-cachos.jsx"
import { Cachos1 } from "../Components/Sections/Cachos/Cachos1/cachos1.jsx"
import { Cachos2 } from "../Components/Sections/Cachos/Cachos2/cachos2.jsx"
import { Cachos3 } from "../Components/Sections/Cachos/Cachos3/cachos3.jsx"
import { Cachos4 } from "../Components/Sections/Cachos/Cachos4/cachos4.jsx"
import { BannerLisos } from "../Components/Sections/Liso/Banner-Liso/banner-lisos.jsx"
import { Liso1 } from "../Components/Sections/Liso/Liso1/liso1.jsx"
import { Liso2 } from "../Components/Sections/Liso/Liso2/liso2.jsx"
import { Liso3 } from "../Components/Sections/Liso/Liso3/liso3.jsx"
import { BannerQuimicas } from "../Components/Sections/Quimica/Banner-Quimica/banner-quimica.jsx"
import { Quimica1 } from "../Components/Sections/Quimica/Quimica1/quimica1.jsx"
import { Quimica2 } from "../Components/Sections/Quimica/Quimica2/quimica2.jsx"
import { Whatsapp } from "../Components/Sections/Whatsapp/whatsapp.jsx"
import { BannerRostos } from "../Components/Sections/Banner-Rosto/banner-rosto.jsx"
import { Rosto } from "../Components/Sections/Rosto/rosto.jsx"
import { Notification } from "../Components/Sections/Notification/notification.jsx"
import { DailyUse } from "../Components/Sections/DailyUse/daily-use.jsx"
import { UsoDiario } from "../Components/Sections/UsoDiario/usodiario.jsx"
import { BannerKit } from "../Components/Sections/Kit-Completo/Banner-Kit/banner-kit.jsx"
import { KitCompleto } from "../Components/Sections/Kit-Completo/Kit-Item/kit-completo.jsx"

export const App = () => {
    return(
        <div>
            <Notification />
            <Header/>
            <Banner/>
            <Menu />
            <BannerCachos />
            <Cachos1 />
            <Cachos2 />
            <Cachos3 />
            <Cachos4 />
            <BannerLisos />
            <Liso3 />
            <Liso1 />
            <Liso2 />
            <BannerQuimicas />
            <Quimica1 />
            <DailyUse />
            <UsoDiario />
            <BannerKit />
            <KitCompleto />
            <BannerRostos/>
            <Rosto/>
            <Whatsapp />
        </div>
    )
}