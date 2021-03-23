import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhoneSE320 from "./components/IPhoneSE320";
import IPadMini768 from "./components/IPadMini768";
import GooglePixel411 from "./components/GooglePixel411";
import IPhone11414 from "./components/IPhone11414";
import IPadPro1024 from "./components/IPadPro1024";
import IMac1280 from "./components/IMac1280";
import SurfaceBook1500 from "./components/SurfaceBook1500";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/iphone-se-320">
          <IPhoneSE320 {...IPhoneSE320Data} />
        </Route>
        <Route path="/ipad-mini-768">
          <IPadMini768 {...IPadMini768Data} />
        </Route>
        <Route path="/:path(|google-pixel-411)">
          <GooglePixel411 {...GooglePixel411Data} />
        </Route>
        <Route path="/iphone-11-414">
          <IPhone11414 {...IPhone11414Data} />
        </Route>
        <Route path="/ipad-pro-1024">
          <IPadPro1024 {...IPadPro1024Data} />
        </Route>
        <Route path="/imac-1280">
          <IMac1280 {...IMac1280Data} />
        </Route>
        <Route path="/surface-book-1500">
          <SurfaceBook1500 {...SurfaceBook1500Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const typePrimarySizexsIconFalseStateDefaData = {
    children: "Log in",
};

const typePrimarySizexsIconFalseStateDefa2Data = {
    children: "Sign up",
};

const typePrimarySizexsIconFalseStateDefa3Data = {
    children: "Learn more",
};

const typePrimarySizexsIconFalseStateDefa4Data = {
    children: "Buy",
};

const IPhoneSE320Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2@2x.svg",
    mobicycle: <>MobiCycle.<br />Tech for the planet.</>,
    text1: "All rights reserved. MobiCycle. 2021",
    content: "/img/content@2x.svg",
    overlapGroup1: "/img/content-1@2x.svg",
    text4: "Innovative solutions",
    text3: "for the management of electronic waste",
    spanText: <>Electronic waste is the world&#x27;s fastest growing waste stream. Improper disposal contributes to climate change due to the chemicals released when ewaste is burned. <br /></>,
    spanText2: "Be part of the solution.",
    typePrimarySizexsIconFalseStateDefaProps: typePrimarySizexsIconFalseStateDefaData,
    typePrimarySizexsIconFalseStateDefa2Props: typePrimarySizexsIconFalseStateDefa2Data,
    typePrimarySizexsIconFalseStateDefa3Props: typePrimarySizexsIconFalseStateDefa3Data,
    typePrimarySizexsIconFalseStateDefa4Props: typePrimarySizexsIconFalseStateDefa4Data,
};

const typePrimarySizexsIconFalseStateDefa5Data = {
    children: "Log in",
};

const typePrimarySizexsIconFalseStateDefa6Data = {
    children: "Sign up",
};

const typePrimarySizexsIconFalseStateDefa32Data = {
    children: "Learn more",
};

const typePrimarySizexsIconFalseStateDefa42Data = {
    children: "Buy",
};

const buttonsData = {
    typePrimarySizexsIconFalseStateDefa3Props: typePrimarySizexsIconFalseStateDefa32Data,
    typePrimarySizexsIconFalseStateDefa4Props: typePrimarySizexsIconFalseStateDefa42Data,
};

const IPadMini768Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2-4@2x.svg",
    text9: "MobiCycle. Tech to save the planet.",
    text5: "All rights reserved. MobiCycle. 2021",
    overlapGroup2: "/img/content-5@1x.svg",
    text8: "Innovative solutions",
    text7: "for the management of electronic waste",
    spanText: <>Electronic waste is the world&#x27;s fastest growing waste stream. Improper disposal contributes to climate change due to the chemicals released when ewaste is burned. <br /><br /></>,
    spanText2: "Be part of the solution.",
    rectangle: "/img/rectangle-2@2x.svg",
    typePrimarySizexsIconFalseStateDefa5Props: typePrimarySizexsIconFalseStateDefa5Data,
    typePrimarySizexsIconFalseStateDefa6Props: typePrimarySizexsIconFalseStateDefa6Data,
    buttonsProps: buttonsData,
};

const typePrimarySizexsIconFalseStateDefa52Data = {
    children: "Log in",
};

const typePrimarySizexsIconFalseStateDefa62Data = {
    children: "Sign up",
};

const typePrimarySizexsIconFalseStateDefa33Data = {
    children: "Learn more",
};

const typePrimarySizexsIconFalseStateDefa43Data = {
    children: "Buy",
};

const GooglePixel411Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2-5@2x.svg",
    text14: <>MobiCycle. <br />Tech to save the planet.</>,
    overlapGroup2: "/img/content-4@1x.svg",
    spanText: "for the management of ",
    spanText2: "electronic waste",
    text13: "Innovative solutions",
    rectangle: "/img/rectangle-1@2x.svg",
    spanText3: <>Electronic waste is the world&#x27;s fastest growing waste stream. <br /><br />Improper disposal contributes to climate change due to the chemicals released when ewaste is burned. <br /><br /></>,
    spanText4: "Be part of the solution.",
    text10: "All rights reserved. MobiCycle. 2021",
    typePrimarySizexsIconFalseStateDefa5Props: typePrimarySizexsIconFalseStateDefa52Data,
    typePrimarySizexsIconFalseStateDefa6Props: typePrimarySizexsIconFalseStateDefa62Data,
    typePrimarySizexsIconFalseStateDefa3Props: typePrimarySizexsIconFalseStateDefa33Data,
    typePrimarySizexsIconFalseStateDefa4Props: typePrimarySizexsIconFalseStateDefa43Data,
};

const typePrimarySizexsIconFalseStateDefa53Data = {
    children: "Log in",
};

const typePrimarySizexsIconFalseStateDefa63Data = {
    children: "Sign up",
};

const typePrimarySizexsIconFalseStateDefa34Data = {
    children: "Learn more",
};

const typePrimarySizexsIconFalseStateDefa44Data = {
    children: "Buy",
};

const buttons2Data = {
    typePrimarySizexsIconFalseStateDefa3Props: typePrimarySizexsIconFalseStateDefa34Data,
    typePrimarySizexsIconFalseStateDefa4Props: typePrimarySizexsIconFalseStateDefa44Data,
};

const IPhone11414Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2-6@2x.svg",
    text19: <>MobiCycle. <br />Tech to save the planet.</>,
    overlapGroup1: "/img/content-4@1x.svg",
    spanText: <>Electronic waste is the world&#x27;s fastest growing waste stream. <br /><br />Improper disposal contributes to climate change due to the chemicals released when ewaste is burned. <br /><br /></>,
    spanText2: "Be part of the solution.",
    spanText3: "for the management of ",
    spanText4: "electronic waste",
    text18: "Innovative solutions",
    rectangle: "/img/rectangle@2x.svg",
    text15: "All rights reserved. MobiCycle. 2021",
    typePrimarySizexsIconFalseStateDefa5Props: typePrimarySizexsIconFalseStateDefa53Data,
    typePrimarySizexsIconFalseStateDefa6Props: typePrimarySizexsIconFalseStateDefa63Data,
    buttonsProps: buttons2Data,
};

const typePrimarySizexlIconFalseStateDefaData = {
    children: "Log in",
};

const typePrimarySizexlIconFalseStateDefa2Data = {
    children: "Sign up",
};

const typePrimarySizexsIconFalseStateDefa35Data = {
    children: "Learn more",
};

const typePrimarySizexsIconFalseStateDefa45Data = {
    children: "Buy",
};

const buttons3Data = {
    typePrimarySizexsIconFalseStateDefa3Props: typePrimarySizexsIconFalseStateDefa35Data,
    typePrimarySizexsIconFalseStateDefa4Props: typePrimarySizexsIconFalseStateDefa45Data,
};

const solutionsData = {
    hardware: "Hardware",
    software: "Software",
    analytics: "Analytics",
};

const solutions2Data = {
    hardware: "Google",
    software: "Microsoft",
    analytics: "AWS",
};

const aBOUTData = {
    whereWeWork: "Where we work?",
    whatIsEwaste: "Who we are?",
    whyIsEwaste: "Why ewaste?",
};

const footerData = {
    solutions: "SOLUTIONS",
    pricing: "Pricing",
    documentation: "Documentation",
    guides: "Guides",
    support: "SUPPORT",
    marketplaces: "MARKETPLACES",
    about: "ABOUT US",
    solutionsProps: solutionsData,
    solutions2Props: solutions2Data,
    aBOUTProps: aBOUTData,
};

const IPadPro1024Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2-3@2x.svg",
    text24: "MobiCycle. Tech to save the planet.",
    overlapGroup1: "/img/content-4@1x.svg",
    text23: "Innovative solutions",
    text22: "for the management of electronic waste",
    spanText: <>Electronic waste is the world&#x27;s fastest growing waste stream. Improper disposal contributes to climate change due to the chemicals released when ewaste is burned. <br /><br /></>,
    spanText2: "Be part of the solution.",
    rectangle: "/img/rectangle-3@2x.svg",
    text20: "All rights reserved. MobiCycle. 2021",
    typePrimarySizexlIconFalseStateDefaProps: typePrimarySizexlIconFalseStateDefaData,
    typePrimarySizexlIconFalseStateDefa2Props: typePrimarySizexlIconFalseStateDefa2Data,
    buttonsProps: buttons3Data,
    footerProps: footerData,
};

const frameData = {
    children: "Quis suspendisse ut fermentum neque vivamus non tellus.",
};

const frame2Data = {
    children: "Buy Basic",
};

const frame3Data = {
    children: "Buy Premium",
};

const frame4Data = {
    children: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
};

const frame42Data = {
    children: "Buy Essential",
};

const frame5Data = {
    children: "eWaste Code Finder",
};

const frame6Data = {
    children: "Included in Basic",
};

const frame7Data = {
    src: "/img/vector-34@2x.svg",
};

const frame8Data = {
    children: "Included in Essential",
};

const frame9Data = {
    src: "/img/vector-36@2x.svg",
};

const frame11Data = {
    children: "Included in Premium",
};

const frame72Data = {
    src: "/img/vector-35@2x.svg",
};

const frame10Data = {
    frame11Props: frame11Data,
    frame7Props: frame72Data,
};

const frame52Data = {
    children: "eWaste Standards",
};

const frame62Data = {
    children: "Included in Basic",
};

const frame73Data = {
    src: "/img/vector-34@2x.svg",
};

const frame82Data = {
    children: "Included in Essential",
};

const frame92Data = {
    src: "/img/vector-36@2x.svg",
};

const frame112Data = {
    children: "Included in Premium",
};

const frame74Data = {
    src: "/img/vector-35@2x.svg",
};

const frame102Data = {
    frame11Props: frame112Data,
    frame7Props: frame74Data,
};

const frame53Data = {
    children: "Electronic Advisor",
};

const frame63Data = {
    children: "Not included in Basic",
};

const frame13Data = {
    src: "/img/vector-37@2x.svg",
};

const frame12Data = {
    frame6Props: frame63Data,
    frame13Props: frame13Data,
};

const frame83Data = {
    children: "Included in Essential",
};

const frame93Data = {
    src: "/img/vector-36@2x.svg",
};

const frame113Data = {
    children: "Included in Premium",
};

const frame75Data = {
    src: "/img/vector-35@2x.svg",
};

const frame103Data = {
    frame11Props: frame113Data,
    frame7Props: frame75Data,
};

const frame64Data = {
    children: "Not included in Basic",
};

const frame132Data = {
    src: "/img/vector-37@2x.svg",
};

const frame122Data = {
    frame6Props: frame64Data,
    frame13Props: frame132Data,
};

const frame65Data = {
    children: "Included in Basic",
};

const frame76Data = {
    src: "/img/vector-34@2x.svg",
};

const frame54Data = {
    children: "Where are WEEE?",
};

const frame114Data = {
    children: "Included in Premium",
};

const frame77Data = {
    src: "/img/vector-35@2x.svg",
};

const frame104Data = {
    frame11Props: frame114Data,
    frame7Props: frame77Data,
};

const frame84Data = {
    children: "Included in Essential",
};

const frame94Data = {
    src: "/img/vector-36@2x.svg",
};

const frame66Data = {
    children: "Not included in Basic",
};

const frame133Data = {
    src: "/img/vector-37@2x.svg",
};

const frame123Data = {
    frame6Props: frame66Data,
    frame13Props: frame133Data,
};

const frame55Data = {
    children: "MobiBins",
};

const frame115Data = {
    children: "Included in Premium",
};

const frame78Data = {
    src: "/img/vector-35@2x.svg",
};

const frame105Data = {
    frame11Props: frame115Data,
    frame7Props: frame78Data,
};

const frame85Data = {
    children: "Included in Essential",
};

const frame95Data = {
    src: "/img/vector-36@2x.svg",
};

const frame67Data = {
    children: "Not included in Basic",
};

const frame134Data = {
    src: "/img/vector-37@2x.svg",
};

const frame124Data = {
    frame6Props: frame67Data,
    frame13Props: frame134Data,
};

const frame56Data = {
    children: "Smart MobiBins",
};

const frame116Data = {
    children: "Included in Premium",
};

const frame79Data = {
    src: "/img/vector-35@2x.svg",
};

const frame106Data = {
    frame11Props: frame116Data,
    frame7Props: frame79Data,
};

const frame86Data = {
    children: "Not included in Essential",
};

const frame14Data = {
    src: "/img/vector-42@2x.svg",
};

const frame68Data = {
    children: "Not included in Basic",
};

const frame135Data = {
    src: "/img/vector-37@2x.svg",
};

const frame117Data = {
    children: "Included in Premium",
};

const frame710Data = {
    src: "/img/vector-35@2x.svg",
};

const frame87Data = {
    children: "Not included in Essential",
};

const frame142Data = {
    src: "/img/vector-42@2x.svg",
};

const frame15Data = {
    advancedMobibins: "Advanced MobiBins",
    frame6Props: frame68Data,
    frame13Props: frame135Data,
    frame11Props: frame117Data,
    frame7Props: frame710Data,
    frame8Props: frame87Data,
    frame14Props: frame142Data,
};

const frame57Data = {
    children: "Email",
};

const frame69Data = {
    children: "Included in Basic",
};

const frame711Data = {
    src: "/img/vector-34@2x.svg",
};

const frame88Data = {
    children: "Included in Essential",
};

const frame96Data = {
    src: "/img/vector-36@2x.svg",
};

const frame118Data = {
    children: "Included in Premium",
};

const frame712Data = {
    src: "/img/vector-35@2x.svg",
};

const frame107Data = {
    frame11Props: frame118Data,
    frame7Props: frame712Data,
};

const frame58Data = {
    children: "Chat",
};

const frame610Data = {
    children: "Not included in Basic",
};

const frame136Data = {
    src: "/img/vector-37@2x.svg",
};

const frame125Data = {
    frame6Props: frame610Data,
    frame13Props: frame136Data,
};

const frame89Data = {
    children: "Included in Essential",
};

const frame97Data = {
    src: "/img/vector-36@2x.svg",
};

const frame119Data = {
    children: "Included in Premium",
};

const frame713Data = {
    src: "/img/vector-35@2x.svg",
};

const frame108Data = {
    frame11Props: frame119Data,
    frame7Props: frame713Data,
};

const frame59Data = {
    children: "Virtual Meeting",
};

const frame611Data = {
    children: "Not included in Basic",
};

const frame137Data = {
    src: "/img/vector-37@2x.svg",
};

const frame126Data = {
    frame6Props: frame611Data,
    frame13Props: frame137Data,
};

const frame810Data = {
    children: "Included in Essential",
};

const frame98Data = {
    src: "/img/vector-36@2x.svg",
};

const frame1110Data = {
    children: "Included in Premium",
};

const frame714Data = {
    src: "/img/vector-35@2x.svg",
};

const frame109Data = {
    frame11Props: frame1110Data,
    frame7Props: frame714Data,
};

const frame612Data = {
    children: "Not included in Basic",
};

const frame138Data = {
    src: "/img/vector-37@2x.svg",
};

const frame811Data = {
    children: "Not included in Essential",
};

const frame143Data = {
    src: "/img/vector-42@2x.svg",
};

const frame1111Data = {
    children: "Included in Premium",
};

const frame715Data = {
    src: "/img/vector-35@2x.svg",
};

const frame152Data = {
    advancedMobibins: "In person meeting",
    frame6Props: frame612Data,
    frame13Props: frame138Data,
    frame8Props: frame811Data,
    frame14Props: frame143Data,
    frame11Props: frame1111Data,
    frame7Props: frame715Data,
};

const frame22Data = {
    children: "Buy Basic",
};

const frame43Data = {
    children: "Buy Essential",
};

const frame32Data = {
    children: "Buy Premium",
};

const typePrimarySizexlIconFalseStateDefa3Data = {
    children: "Log in",
};

const typePrimarySizexlIconFalseStateDefa22Data = {
    children: "Sign up",
};

const MacBookPro1440Data = {
    overlapGroup3: "/img/rectangle-4@1x.svg",
    pricing: "PRICING",
    featureBy: "Feature by",
    plans: "Plans",
    basic: "Basic",
    essential: "Essential",
    premium: "Premium",
    text49: "Pricing plan comparison",
    price: "$20",
    Mo: "/mo",
    text28: "Pricing per user licence",
    price2: "$300",
    Mo2: "/mo",
    text27: "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
    price3: "$100",
    Mo3: "/mo",
    apps: "Apps",
    whereAreWeee: "Where are WEEE?",
    upTo20Users: "Up to 20 users",
    upTo50Users: "Up to 50 users",
    hardware: "Hardware",
    support: "Support",
    chooseYourPlan: "Choose your plan",
    body: "/img/body-2@1x.png",
    color_Logo_Transparent2: "/img/color-logo-transparent-2-2@2x.svg",
    text50: "MobiCycle. Tech to save the planet.",
    text25: "All rights reserved. MobiCycle 2021.",
    solutions: "SOLUTIONS",
    hardware2: "Hardware",
    software: "Software",
    analytics: "Analytics",
    pricing2: "Pricing",
    documentation: "Documentation",
    guides: "Guides",
    support2: "SUPPORT",
    google: "Google",
    microsoft: "Microsoft",
    aws: "AWS",
    marketplaces: "MARKETPLACES",
    about: "ABOUT US",
    whereWeWork: "Where we work?",
    whatIsEwaste: "Who we are?",
    whyIsEwaste: "Why ewaste?",
    rectangle: "/img/rectangle-3@2x.svg",
    frameProps: frameData,
    frame2Props: frame4Data,
    frame3Props: frame3Data,
    frame4Props: frame42Data,
    frame5Props: frame5Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
    frame8Props: frame8Data,
    frame9Props: frame9Data,
    frame10Props: frame10Data,
    frame52Props: frame52Data,
    frame62Props: frame62Data,
    frame72Props: frame73Data,
    frame82Props: frame82Data,
    frame92Props: frame92Data,
    frame102Props: frame102Data,
    frame53Props: frame53Data,
    frame12Props: frame12Data,
    frame83Props: frame83Data,
    frame93Props: frame93Data,
    frame103Props: frame103Data,
    frame122Props: frame122Data,
    frame63Props: frame65Data,
    frame73Props: frame76Data,
    frame54Props: frame54Data,
    frame104Props: frame104Data,
    frame84Props: frame84Data,
    frame94Props: frame94Data,
    frame123Props: frame123Data,
    frame55Props: frame55Data,
    frame105Props: frame105Data,
    frame85Props: frame85Data,
    frame95Props: frame95Data,
    frame124Props: frame124Data,
    frame56Props: frame56Data,
    frame106Props: frame106Data,
    frame86Props: frame86Data,
    frame14Props: frame14Data,
    frame15Props: frame15Data,
    frame57Props: frame57Data,
    frame64Props: frame69Data,
    frame74Props: frame711Data,
    frame87Props: frame88Data,
    frame96Props: frame96Data,
    frame107Props: frame107Data,
    frame58Props: frame58Data,
    frame125Props: frame125Data,
    frame88Props: frame89Data,
    frame97Props: frame97Data,
    frame108Props: frame108Data,
    frame59Props: frame59Data,
    frame126Props: frame126Data,
    frame89Props: frame810Data,
    frame98Props: frame98Data,
    frame109Props: frame109Data,
    frame152Props: frame152Data,
    frame22Props: frame22Data,
    frame42Props: frame43Data,
    frame32Props: frame32Data,
    typePrimarySizexlIconFalseStateDefaProps: typePrimarySizexlIconFalseStateDefa3Data,
    typePrimarySizexlIconFalseStateDefa2Props: typePrimarySizexlIconFalseStateDefa22Data,
};

const frame16Data = {
    children: "Buy Basic",
};

const frame17Data = {
    children: "Buy Essential",
};

const frame18Data = {
    children: "Buy Premium",
};

const frame19Data = {
    children: "eWaste Code Finder",
};

const frame20Data = {
    children: "Included in Basic",
};

const frame716Data = {
    src: "/img/vector@2x.svg",
};

const frame222Data = {
    children: "Included in Essential",
};

const frame99Data = {
    src: "/img/vector-2@2x.svg",
};

const frame21Data = {
    frame22Props: frame222Data,
    frame9Props: frame99Data,
};

const frame24Data = {
    children: "Included in Premium",
};

const frame717Data = {
    src: "/img/vector-1@2x.svg",
};

const frame23Data = {
    frame24Props: frame24Data,
    frame7Props: frame717Data,
};

const frame192Data = {
    children: "eWaste Standards",
};

const frame202Data = {
    children: "Included in Basic",
};

const frame718Data = {
    src: "/img/vector@2x.svg",
};

const frame223Data = {
    children: "Included in Essential",
};

const frame910Data = {
    src: "/img/vector-2@2x.svg",
};

const frame212Data = {
    frame22Props: frame223Data,
    frame9Props: frame910Data,
};

const frame242Data = {
    children: "Included in Premium",
};

const frame719Data = {
    src: "/img/vector-1@2x.svg",
};

const frame232Data = {
    frame24Props: frame242Data,
    frame7Props: frame719Data,
};

const frame193Data = {
    children: "Electronic Advisor",
};

const frame203Data = {
    children: "Not included in Basic",
};

const frame139Data = {
    src: "/img/vector-3@2x.svg",
};

const frame25Data = {
    frame20Props: frame203Data,
    frame13Props: frame139Data,
};

const frame224Data = {
    children: "Included in Essential",
};

const frame911Data = {
    src: "/img/vector-2@2x.svg",
};

const frame213Data = {
    frame22Props: frame224Data,
    frame9Props: frame911Data,
};

const frame243Data = {
    children: "Included in Premium",
};

const frame720Data = {
    src: "/img/vector-1@2x.svg",
};

const frame233Data = {
    frame24Props: frame243Data,
    frame7Props: frame720Data,
};

const frame204Data = {
    children: "Not included in Basic",
};

const frame1310Data = {
    src: "/img/vector-3@2x.svg",
};

const frame252Data = {
    frame20Props: frame204Data,
    frame13Props: frame1310Data,
};

const frame194Data = {
    children: "Where are WEEE?",
};

const frame205Data = {
    children: "Included in Basic",
};

const frame721Data = {
    src: "/img/vector@2x.svg",
};

const frame225Data = {
    children: "Included in Essential",
};

const frame912Data = {
    src: "/img/vector-2@2x.svg",
};

const frame214Data = {
    frame22Props: frame225Data,
    frame9Props: frame912Data,
};

const frame244Data = {
    children: "Included in Premium",
};

const frame722Data = {
    src: "/img/vector-1@2x.svg",
};

const frame234Data = {
    frame24Props: frame244Data,
    frame7Props: frame722Data,
};

const frame195Data = {
    children: "MobiBins",
};

const frame206Data = {
    children: "Not included in Basic",
};

const frame1311Data = {
    src: "/img/vector-3@2x.svg",
};

const frame253Data = {
    frame20Props: frame206Data,
    frame13Props: frame1311Data,
};

const frame226Data = {
    children: "Included in Essential",
};

const frame913Data = {
    src: "/img/vector-2@2x.svg",
};

const frame215Data = {
    frame22Props: frame226Data,
    frame9Props: frame913Data,
};

const frame245Data = {
    children: "Included in Premium",
};

const frame723Data = {
    src: "/img/vector-1@2x.svg",
};

const frame235Data = {
    frame24Props: frame245Data,
    frame7Props: frame723Data,
};

const frame196Data = {
    children: "Smart MobiBins",
};

const frame207Data = {
    children: "Not included in Basic",
};

const frame1312Data = {
    src: "/img/vector-3@2x.svg",
};

const frame254Data = {
    frame20Props: frame207Data,
    frame13Props: frame1312Data,
};

const frame227Data = {
    children: "Not included in Essential",
};

const frame144Data = {
    src: "/img/vector-8@2x.svg",
};

const frame246Data = {
    children: "Included in Premium",
};

const frame724Data = {
    src: "/img/vector-1@2x.svg",
};

const frame236Data = {
    frame24Props: frame246Data,
    frame7Props: frame724Data,
};

const frame208Data = {
    children: "Not included in Basic",
};

const frame1313Data = {
    src: "/img/vector-3@2x.svg",
};

const frame228Data = {
    children: "Not included in Essential",
};

const frame145Data = {
    src: "/img/vector-8@2x.svg",
};

const frame247Data = {
    children: "Included in Premium",
};

const frame725Data = {
    src: "/img/vector-1@2x.svg",
};

const frame26Data = {
    advancedMobibins: "Advanced MobiBins",
    frame20Props: frame208Data,
    frame13Props: frame1313Data,
    frame22Props: frame228Data,
    frame14Props: frame145Data,
    frame24Props: frame247Data,
    frame7Props: frame725Data,
};

const frame197Data = {
    children: "Email",
};

const frame209Data = {
    children: "Included in Basic",
};

const frame726Data = {
    src: "/img/vector@2x.svg",
};

const frame229Data = {
    children: "Included in Essential",
};

const frame914Data = {
    src: "/img/vector-2@2x.svg",
};

const frame216Data = {
    frame22Props: frame229Data,
    frame9Props: frame914Data,
};

const frame248Data = {
    children: "Included in Premium",
};

const frame727Data = {
    src: "/img/vector-1@2x.svg",
};

const frame237Data = {
    frame24Props: frame248Data,
    frame7Props: frame727Data,
};

const frame198Data = {
    children: "Chat",
};

const frame2010Data = {
    children: "Not included in Basic",
};

const frame1314Data = {
    src: "/img/vector-3@2x.svg",
};

const frame255Data = {
    frame20Props: frame2010Data,
    frame13Props: frame1314Data,
};

const frame2210Data = {
    children: "Included in Essential",
};

const frame915Data = {
    src: "/img/vector-2@2x.svg",
};

const frame217Data = {
    frame22Props: frame2210Data,
    frame9Props: frame915Data,
};

const frame249Data = {
    children: "Included in Premium",
};

const frame728Data = {
    src: "/img/vector-1@2x.svg",
};

const frame238Data = {
    frame24Props: frame249Data,
    frame7Props: frame728Data,
};

const frame199Data = {
    children: "Virtual Meeting",
};

const frame2011Data = {
    children: "Not included in Basic",
};

const frame1315Data = {
    src: "/img/vector-3@2x.svg",
};

const frame256Data = {
    frame20Props: frame2011Data,
    frame13Props: frame1315Data,
};

const frame2211Data = {
    children: "Included in Essential",
};

const frame916Data = {
    src: "/img/vector-2@2x.svg",
};

const frame218Data = {
    frame22Props: frame2211Data,
    frame9Props: frame916Data,
};

const frame2410Data = {
    children: "Included in Premium",
};

const frame729Data = {
    src: "/img/vector-1@2x.svg",
};

const frame239Data = {
    frame24Props: frame2410Data,
    frame7Props: frame729Data,
};

const frame2012Data = {
    children: "Not included in Basic",
};

const frame1316Data = {
    src: "/img/vector-3@2x.svg",
};

const frame2212Data = {
    children: "Not included in Essential",
};

const frame146Data = {
    src: "/img/vector-8@2x.svg",
};

const frame2411Data = {
    children: "Included in Premium",
};

const frame730Data = {
    src: "/img/vector-1@2x.svg",
};

const frame262Data = {
    advancedMobibins: "In person meeting",
    frame20Props: frame2012Data,
    frame13Props: frame1316Data,
    frame22Props: frame2212Data,
    frame14Props: frame146Data,
    frame24Props: frame2411Data,
    frame7Props: frame730Data,
};

const frame162Data = {
    children: "Buy Basic",
};

const frame172Data = {
    children: "Buy Essential",
};

const frame182Data = {
    children: "Buy Premium",
};

const typePrimarySizexlIconFalseStateDefa23Data = {
    children: "Sign up",
};

const typePrimarySizexlIconFalseStateDefa4Data = {
    children: "Log in",
};

const solutions3Data = {
    hardware: "Hardware",
    software: "Software",
    analytics: "Analytics",
};

const solutions4Data = {
    hardware: "Google",
    software: "Microsoft",
    analytics: "AWS",
};

const aBOUT2Data = {
    whereWeWork: "Where we work?",
    whatIsEwaste: "Who we are?",
    whyIsEwaste: "Why ewaste?",
};

const footer2Data = {
    solutions: "SOLUTIONS",
    pricing: "Pricing",
    documentation: "Documentation",
    guides: "Guides",
    support: "SUPPORT",
    marketplaces: "MARKETPLACES",
    about: "ABOUT US",
    solutionsProps: solutions3Data,
    solutions2Props: solutions4Data,
    aBOUTProps: aBOUT2Data,
};

const IMac1280Data = {
    overlapGroup2: "/img/rectangle-8@1x.svg",
    pricing: "PRICING",
    featureBy: "Feature by",
    plans: "Plans",
    basic: "Basic",
    essential: "Essential",
    premium: "Premium",
    text75: "Pricing plan comparison",
    text54: "Pricing per user licence",
    price: "$20",
    Mo: "/mo",
    text52: "Quis suspendisse ut fermentum neque vivamus non tellus.",
    price2: "$100",
    Mo2: "/mo",
    text55: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
    price3: "$300",
    Mo3: "/mo",
    text53: "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
    apps: "Apps",
    whereAreWeee: "Where are WEEE?",
    upTo20Users: "Up to 20 users",
    upTo50Users: "Up to 50 users",
    hardware: "Hardware",
    support: "Support",
    chooseYourPlan: "Choose your plan",
    body: "/img/body-1@1x.png",
    color_Logo_Transparent3: "/img/color-logo-transparent-3@2x.svg",
    text76: "MobiCycle. Tech to save the planet.",
    text51: "All rights reserved. MobiCycle 2021.",
    rectangle: "/img/rectangle-3@2x.svg",
    frame16Props: frame16Data,
    frame17Props: frame17Data,
    frame18Props: frame18Data,
    frame19Props: frame19Data,
    frame20Props: frame20Data,
    frame7Props: frame716Data,
    frame21Props: frame21Data,
    frame23Props: frame23Data,
    frame192Props: frame192Data,
    frame202Props: frame202Data,
    frame72Props: frame718Data,
    frame212Props: frame212Data,
    frame232Props: frame232Data,
    frame193Props: frame193Data,
    frame25Props: frame25Data,
    frame213Props: frame213Data,
    frame233Props: frame233Data,
    frame252Props: frame252Data,
    frame194Props: frame194Data,
    frame203Props: frame205Data,
    frame73Props: frame721Data,
    frame214Props: frame214Data,
    frame234Props: frame234Data,
    frame195Props: frame195Data,
    frame253Props: frame253Data,
    frame215Props: frame215Data,
    frame235Props: frame235Data,
    frame196Props: frame196Data,
    frame254Props: frame254Data,
    frame22Props: frame227Data,
    frame14Props: frame144Data,
    frame236Props: frame236Data,
    frame26Props: frame26Data,
    frame197Props: frame197Data,
    frame204Props: frame209Data,
    frame74Props: frame726Data,
    frame216Props: frame216Data,
    frame237Props: frame237Data,
    frame198Props: frame198Data,
    frame255Props: frame255Data,
    frame217Props: frame217Data,
    frame238Props: frame238Data,
    frame199Props: frame199Data,
    frame256Props: frame256Data,
    frame218Props: frame218Data,
    frame239Props: frame239Data,
    frame262Props: frame262Data,
    frame162Props: frame162Data,
    frame172Props: frame172Data,
    frame182Props: frame182Data,
    typePrimarySizexlIconFalseStateDefa2Props: typePrimarySizexlIconFalseStateDefa23Data,
    typePrimarySizexlIconFalseStateDefaProps: typePrimarySizexlIconFalseStateDefa4Data,
    footerProps: footer2Data,
};

const typePrimarySizexlIconFalseStateDefa5Data = {
    children: "Log in",
};

const typePrimarySizexlIconFalseStateDefa24Data = {
    children: "Sign up",
};

const frame27Data = {
    children: "Quis suspendisse ut fermentum neque vivamus non tellus.",
};

const frame28Data = {
    children: "Buy Basic",
};

const frame272Data = {
    children: "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
};

const frame29Data = {
    children: "Buy Premium",
};

const frame30Data = {
    children: "Buy Essential",
};

const frame31Data = {
    children: "eWaste Code Finder",
};

const frame322Data = {
    children: "Included in Basic",
};

const frame917Data = {
    src: "/img/vector-36@2x.svg",
};

const frame33Data = {
    children: "Included in Essential",
};

const frame918Data = {
    src: "/img/vector-36@2x.svg",
};

const frame35Data = {
    children: "Included in Premium",
};

const frame919Data = {
    src: "/img/vector-36@2x.svg",
};

const frame34Data = {
    frame35Props: frame35Data,
    frame9Props: frame919Data,
};

const frame312Data = {
    children: "eWaste Standards",
};

const frame323Data = {
    children: "Included in Basic",
};

const frame920Data = {
    src: "/img/vector-36@2x.svg",
};

const frame332Data = {
    children: "Included in Essential",
};

const frame921Data = {
    src: "/img/vector-36@2x.svg",
};

const frame352Data = {
    children: "Included in Premium",
};

const frame922Data = {
    src: "/img/vector-36@2x.svg",
};

const frame342Data = {
    frame35Props: frame352Data,
    frame9Props: frame922Data,
};

const frame313Data = {
    children: "Electronic Advisor",
};

const frame324Data = {
    children: "Not included in Basic",
};

const frame147Data = {
    src: "/img/vector-42@2x.svg",
};

const frame36Data = {
    frame32Props: frame324Data,
    frame14Props: frame147Data,
};

const frame333Data = {
    children: "Included in Essential",
};

const frame923Data = {
    src: "/img/vector-36@2x.svg",
};

const frame353Data = {
    children: "Included in Premium",
};

const frame924Data = {
    src: "/img/vector-36@2x.svg",
};

const frame343Data = {
    frame35Props: frame353Data,
    frame9Props: frame924Data,
};

const frame325Data = {
    children: "Not included in Basic",
};

const frame148Data = {
    src: "/img/vector-42@2x.svg",
};

const frame362Data = {
    frame32Props: frame325Data,
    frame14Props: frame148Data,
};

const frame326Data = {
    children: "Included in Basic",
};

const frame925Data = {
    src: "/img/vector-36@2x.svg",
};

const frame314Data = {
    children: "Where are WEEE?",
};

const frame354Data = {
    children: "Included in Premium",
};

const frame926Data = {
    src: "/img/vector-36@2x.svg",
};

const frame344Data = {
    frame35Props: frame354Data,
    frame9Props: frame926Data,
};

const frame334Data = {
    children: "Included in Essential",
};

const frame927Data = {
    src: "/img/vector-36@2x.svg",
};

const frame327Data = {
    children: "Not included in Basic",
};

const frame149Data = {
    src: "/img/vector-42@2x.svg",
};

const frame363Data = {
    frame32Props: frame327Data,
    frame14Props: frame149Data,
};

const frame315Data = {
    children: "MobiBins",
};

const frame355Data = {
    children: "Included in Premium",
};

const frame928Data = {
    src: "/img/vector-36@2x.svg",
};

const frame345Data = {
    frame35Props: frame355Data,
    frame9Props: frame928Data,
};

const frame335Data = {
    children: "Included in Essential",
};

const frame929Data = {
    src: "/img/vector-36@2x.svg",
};

const frame328Data = {
    children: "Not included in Basic",
};

const frame1410Data = {
    src: "/img/vector-42@2x.svg",
};

const frame364Data = {
    frame32Props: frame328Data,
    frame14Props: frame1410Data,
};

const frame316Data = {
    children: "Smart MobiBins",
};

const frame356Data = {
    children: "Included in Premium",
};

const frame930Data = {
    src: "/img/vector-36@2x.svg",
};

const frame346Data = {
    frame35Props: frame356Data,
    frame9Props: frame930Data,
};

const frame336Data = {
    children: "Not included in Essential",
};

const frame1411Data = {
    src: "/img/vector-42@2x.svg",
};

const frame329Data = {
    children: "Not included in Basic",
};

const frame1412Data = {
    src: "/img/vector-42@2x.svg",
};

const frame357Data = {
    children: "Included in Premium",
};

const frame931Data = {
    src: "/img/vector-36@2x.svg",
};

const frame337Data = {
    children: "Not included in Essential",
};

const frame1413Data = {
    src: "/img/vector-42@2x.svg",
};

const frame37Data = {
    advancedMobibins: "Advanced MobiBins",
    frame32Props: frame329Data,
    frame14Props: frame1412Data,
    frame35Props: frame357Data,
    frame9Props: frame931Data,
    frame33Props: frame337Data,
    frame142Props: frame1413Data,
};

const frame317Data = {
    children: "Email",
};

const frame3210Data = {
    children: "Included in Basic",
};

const frame932Data = {
    src: "/img/vector-36@2x.svg",
};

const frame338Data = {
    children: "Included in Essential",
};

const frame933Data = {
    src: "/img/vector-36@2x.svg",
};

const frame358Data = {
    children: "Included in Premium",
};

const frame934Data = {
    src: "/img/vector-36@2x.svg",
};

const frame347Data = {
    frame35Props: frame358Data,
    frame9Props: frame934Data,
};

const frame318Data = {
    children: "Chat",
};

const frame3211Data = {
    children: "Not included in Basic",
};

const frame1414Data = {
    src: "/img/vector-42@2x.svg",
};

const frame365Data = {
    frame32Props: frame3211Data,
    frame14Props: frame1414Data,
};

const frame339Data = {
    children: "Included in Essential",
};

const frame935Data = {
    src: "/img/vector-36@2x.svg",
};

const frame359Data = {
    children: "Included in Premium",
};

const frame936Data = {
    src: "/img/vector-36@2x.svg",
};

const frame348Data = {
    frame35Props: frame359Data,
    frame9Props: frame936Data,
};

const frame319Data = {
    children: "Virtual Meeting",
};

const frame3212Data = {
    children: "Not included in Basic",
};

const frame1415Data = {
    src: "/img/vector-42@2x.svg",
};

const frame366Data = {
    frame32Props: frame3212Data,
    frame14Props: frame1415Data,
};

const frame3310Data = {
    children: "Included in Essential",
};

const frame937Data = {
    src: "/img/vector-36@2x.svg",
};

const frame3510Data = {
    children: "Included in Premium",
};

const frame938Data = {
    src: "/img/vector-36@2x.svg",
};

const frame349Data = {
    frame35Props: frame3510Data,
    frame9Props: frame938Data,
};

const frame3213Data = {
    children: "Not included in Basic",
};

const frame1416Data = {
    src: "/img/vector-42@2x.svg",
};

const frame3311Data = {
    children: "Not included in Essential",
};

const frame1417Data = {
    src: "/img/vector-42@2x.svg",
};

const frame3511Data = {
    children: "Included in Premium",
};

const frame939Data = {
    src: "/img/vector-36@2x.svg",
};

const frame372Data = {
    advancedMobibins: "In person meeting",
    frame32Props: frame3213Data,
    frame14Props: frame1416Data,
    frame33Props: frame3311Data,
    frame142Props: frame1417Data,
    frame35Props: frame3511Data,
    frame9Props: frame939Data,
};

const frame282Data = {
    children: "Buy Basic",
};

const frame302Data = {
    children: "Buy Essential",
};

const frame292Data = {
    children: "Buy Premium",
};

const frame38Data = {
    whereverYouAre: "Wherever you are",
    text102: "Call us today to discuss your needs.",
};

const frame382Data = {
    whereverYouAre: "For the long term",
    text102: "We can help you with independent, unbiased advice and best practices that leverage cutting edge technologies.",
};

const frame39Data = {
    transparency: "Transparency",
    text106: "Your data tells a story about how your electronic waste is handled. Our data scientists can work with your company to uncover insights into how your electronics are handled.",
};

const frame392Data = {
    transparency: "Reputation risk",
    text106: "Fines for the improper disposal of electronic waste can cost your organization millions. With our digital and hardware tech solutions, you can protect your company’s hard earned green credentials.",
};

const frame393Data = {
    transparency: "Sustainability goals",
    text106: "Climate change will impact your ability to operate in drastic ways in the future. Electronic waste programs can count towards your efforts to minimize the repercussions from a warming planet.",
};

const SurfaceBook1500Data = {
    color_Logo_Transparent2: "/img/color-logo-transparent-2@2x.svg",
    text112: "MobiCycle. Tech to save the planet.",
    overlapGroup3: "/img/rectangle-5@1x.svg",
    pricing: "PRICING",
    featureBy: "Feature by",
    plans: "Plans",
    basic: "Basic",
    essential: "Essential",
    premium: "Premium",
    text101: "Pricing plan comparison",
    price: "$20",
    Mo: "/mo",
    text80: "Pricing per user licence",
    price2: "$300",
    Mo2: "/mo",
    price3: "$100",
    Mo3: "/mo",
    text81: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
    apps: "Apps",
    whereAreWeee: "Where are WEEE?",
    upTo20Users: "Up to 20 users",
    upTo50Users: "Up to 50 users",
    hardware: "Hardware",
    support: "Support",
    chooseYourPlan: "Choose your plan",
    rectangle: "/img/rectangle-2@1x.svg",
    rectangle2: "/img/rectangle-8@1x.svg",
    stayInTheLoop: "Stay in the loop",
    text104: "Clear answers to what we should do when a product’s software doesn’t outlive its hardware, or when its electronics don’t outlast their usefulness.",
    vector: "/img/vector-68@2x.svg",
    vector2: "/img/vector-69@2x.svg",
    twoUniqueProblems: "Two unique problems",
    text105: "Electronic waste contains potentially recyclable materials that could be used to power the next cutting edge electronic devices.  If treated improperly, toxins such as mercury, cadmium, chromium, and ozone-depleting chlorofluorocarbons can pollute the planet.",
    vector3: "/img/vector-70@2x.svg",
    vector4: "/img/vector-71@2x.svg",
    vector5: "/img/vector-72@2x.svg",
    rectangle3: "/img/rectangle-9@1x.svg",
    text111: "A better way to retire your electronics",
    text110: "Explore our range of digital and harware solutions. Save time, increase transparency and become a more sustainable organization.",
    vector6: "/img/vector@1x.png",
    sharedDotPattern: "/img/shared-dot-pattern-2@1x.png",
    sharedDotPattern2: "/img/shared-dot-pattern-2@1x.png",
    rectangle4: "/img/rectangle-3@2x.svg",
    text77: "All rights reserved. MobiCycle. 2021",
    solutions: "SOLUTIONS",
    hardware2: "Hardware",
    software: "Software",
    analytics: "Analytics",
    pricing2: "Pricing",
    documentation: "Documentation",
    guides: "Guides",
    support2: "SUPPORT",
    google: "Google",
    microsoft: "Microsoft",
    aws: "AWS",
    marketplaces: "MARKETPLACES",
    about: "ABOUT US",
    whereWeWork: "Where we work?",
    whatIsEwaste: "Who we are?",
    whyIsEwaste: "Why ewaste?",
    typePrimarySizexlIconFalseStateDefaProps: typePrimarySizexlIconFalseStateDefa5Data,
    typePrimarySizexlIconFalseStateDefa2Props: typePrimarySizexlIconFalseStateDefa24Data,
    frame27Props: frame27Data,
    frame28Props: frame28Data,
    frame272Props: frame272Data,
    frame29Props: frame29Data,
    frame30Props: frame30Data,
    frame31Props: frame31Data,
    frame32Props: frame322Data,
    frame9Props: frame917Data,
    frame33Props: frame33Data,
    frame92Props: frame918Data,
    frame34Props: frame34Data,
    frame312Props: frame312Data,
    frame322Props: frame323Data,
    frame93Props: frame920Data,
    frame332Props: frame332Data,
    frame94Props: frame921Data,
    frame342Props: frame342Data,
    frame313Props: frame313Data,
    frame36Props: frame36Data,
    frame333Props: frame333Data,
    frame95Props: frame923Data,
    frame343Props: frame343Data,
    frame362Props: frame362Data,
    frame323Props: frame326Data,
    frame96Props: frame925Data,
    frame314Props: frame314Data,
    frame344Props: frame344Data,
    frame334Props: frame334Data,
    frame97Props: frame927Data,
    frame363Props: frame363Data,
    frame315Props: frame315Data,
    frame345Props: frame345Data,
    frame335Props: frame335Data,
    frame98Props: frame929Data,
    frame364Props: frame364Data,
    frame316Props: frame316Data,
    frame346Props: frame346Data,
    frame336Props: frame336Data,
    frame14Props: frame1411Data,
    frame37Props: frame37Data,
    frame317Props: frame317Data,
    frame324Props: frame3210Data,
    frame99Props: frame932Data,
    frame337Props: frame338Data,
    frame910Props: frame933Data,
    frame347Props: frame347Data,
    frame318Props: frame318Data,
    frame365Props: frame365Data,
    frame338Props: frame339Data,
    frame911Props: frame935Data,
    frame348Props: frame348Data,
    frame319Props: frame319Data,
    frame366Props: frame366Data,
    frame339Props: frame3310Data,
    frame912Props: frame937Data,
    frame349Props: frame349Data,
    frame372Props: frame372Data,
    frame282Props: frame282Data,
    frame302Props: frame302Data,
    frame292Props: frame292Data,
    frame38Props: frame38Data,
    frame382Props: frame382Data,
    frame39Props: frame39Data,
    frame392Props: frame392Data,
    frame393Props: frame393Data,
};

