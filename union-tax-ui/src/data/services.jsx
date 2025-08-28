import charecter_certificate from "../assets/charecter_certificate.png";
import childless_certificate from "../assets/childless_certificate.png";
import death_certificate from "../assets/death_certificate.png";
import disability_certificate from "../assets/disability_certificate.png";
import family_certificate from "../assets/family_certificate.png";
import farming_certificate from "../assets/farming_certificate.png";
import freedome_fighter from "../assets/freedome_fighter_2.png";
import income_certificate from "../assets/income_certificate.png";
import infrastructure_certificate from "../assets/infrastructure_certificate.png";
import jatiyota_sonod from "../assets/jatiyota_sonod.png";
import landless_certificate from "../assets/landless_certificate.png";
import late_voter from "../assets/late_voter.png";
import marriage_certificate from "../assets/marrege_certificate.png";
import missing_certificate from "../assets/missing_certificate.png";
import nagorik_sonod from "../assets/nagorik_sonod.png";
import new_voter_sonod from "../assets/new_voter_sonod.png";
import nid_correction_certificate from "../assets/nid_correction_certificate.png";
import no_objection_certificate from "../assets/no_objection_certificate.png";
import non_remarried_certificate from "../assets/non_remarried_certificate.png";
import not_rohinga from "../assets/not_rohinga.png";
import other_certificate from "../assets/other_certificate.png";
import parental_consent from "../assets/parental_consent.png";
import permanent_resident from "../assets/permanent_resident.png";
import prottoyon_potro from "../assets/prottoyon_potro.png";
import same_name_certificate from "../assets/same_name_certificate.png";
import survival_certificate from "../assets/survival_certificate.png";
import trade_license from "../assets/trade_license.png";
import unmarried_certificate from "../assets/unmarried_certificate.png";
import voter_area_transfer from "../assets/voter_area_transfer.png";
import voter_register from "../assets/voter_register.png";
import warish_sonod from "../assets/warish_sonod.png";

const services = [
  {
    title: "উত্তরাধিকার সনদ",
    icon: <img src={warish_sonod} width="40" height="40" />,
    path: "/",
  },
  {
    title: "ট্রেড লাইসেন্স",
    icon: <img src={trade_license} width="40" height="40" />,
    path: "/",
  },
  {
    title: "ওয়ারিশান সনদ",
    icon: <img src={warish_sonod} width="40" height="40" />,
    path: "/",
  },
  {
    title: "নাগরিকত্ব সনদ",
    icon: <img src={nagorik_sonod} width="40" height="40" />,
    path: "/",
  },
  {
    title: "জাতীয়তা সনদ",
    icon: <img src={jatiyota_sonod} width="40" height="40" />,
    path: "/",
  },
  {
    title: "নতুন ভোটার প্রত্যয়ন",
    icon: <img src={new_voter_sonod} width="40" height="40" />,
    path: "/",
  },
  {
    title: "ভোটার নিবন্ধন সংক্রান্ত অঙ্গিকারনামা",
    icon: <img src={voter_register} width="40" height="40" />,
    path: "/",
  },
  {
    title: "মৃত্যু নিবন্ধন সনদ",
    icon: <img src={death_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "জাতীয় পরিচয়পত্র সংশোধন প্রত্যয়ন",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "জন্ম নিবন্ধন সংশোধন প্রত্যয়ন",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "আয়ের প্রত্যয়ন",
    icon: <img src={income_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "পারিবারিক সনদ",
    icon: <img src={family_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "অবিবাহিত সনদ",
    icon: <img src={unmarried_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "পুনঃ বিবাহ না হওয়া সনদ",
    icon: <img src={non_remarried_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "প্রতিবন্ধী সনদ",
    icon: <img src={disability_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "অনাপত্তি প্রত্যয়নপত্র",
    icon: <img src={no_objection_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "প্রত্যয়ন পত্র",
    icon: <img src={prottoyon_potro} width="40" height="40" />,
    path: "/",
  },
  {
    title: "রোহিঙ্গা নয় মর্মে প্রত্যয়ন পত্র",
    icon: <img src={not_rohinga} width="40" height="40" />,
    path: "/",
  },
  {
    title: "ভোটার এলাকা স্থানান্তর প্রত্যয়ন",
    icon: <img src={voter_area_transfer} width="40" height="40" />,
    path: "/",
  },
  {
    title: "অবকাঠামো নির্মাণের অনুমতি পত্র",
    icon: <img src={infrastructure_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "ভূমিহীন সনদ",
    icon: <img src={landless_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "অভিভাবক সম্মতিপত্র",
    icon: <img src={parental_consent} width="40" height="40" />,
    path: "/",
  },
  {
    title: "একই নামের প্রত্যয়ন",
    icon: <img src={same_name_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "চারিত্রিক সনদ",
    icon: <img src={charecter_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "নিঃসন্তান প্রত্যয়ন",
    icon: <img src={childless_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "স্থায়ী বাসিন্দা সনদ",
    icon: <img src={permanent_resident} width="40" height="40" />,
    path: "/",
  },
  {
    title: "জীবিত থাকার প্রত্যয়ন",
    icon: <img src={survival_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "কৃষি প্রত্যয়ন",
    icon: <img src={farming_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "বিবাহিত সনদ পত্র",
    icon: <img src={marriage_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "বিলম্বে ভোটার সংক্রান্ত প্রত্যয়ন",
    icon: <img src={late_voter} width="40" height="40" />,
    path: "/",
  },
  {
    title: "নিরুদ্দেশ সংক্রান্ত প্রত্যয়নপত্র",
    icon: <img src={missing_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "বিবিধ সনদ",
    icon: <img src={other_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "মুক্তিযোদ্ধা সনদ",
    icon: <img src={freedome_fighter} width="40" height="40" />,
    path: "/",
  },
  {
    title: "না-দাবি পত্র",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "বেকারত্ব সনদ",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "স্বামী পরিত্যক্তা প্রত্যয়ন পত্র",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "মৃত ব্যক্তির প্রত্যয়ন (যাহার জন্য প্রয়োজন)",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
  {
    title: "বিধবা প্রত্যয়ন",
    icon: <img src={nid_correction_certificate} width="40" height="40" />,
    path: "/",
  },
];

export default services;
