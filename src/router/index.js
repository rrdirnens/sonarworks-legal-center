import { createWebHistory, createRouter } from "vue-router";
import LegalCenter from "@/views/LegalCenter.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import PartnershipPolicy from "@/views/PartnershipPolicy.vue";
import TermsAndConditions from "@/views/TermsAndConditions.vue";
import CookiesPolicy from "@/views/CookiesPolicy.vue";
import SupportService from "@/views/SupportService.vue";
import TrueFiPrivacy from "@/views/TrueFiPrivacy.vue";
import EndUserLicenseAgreement from "@/views/EndUserLicenseAgreement.vue";

const routes = [
  {
    path: "/",
    name: "LegalCenter",
    component: LegalCenter,
  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    component: PrivacyPolicy,
  },
  {
    path: "/partnership",
    name: "Partnership Policy",
    component: PartnershipPolicy,
  },
  {
    path: "/t-and-c",
    name: "Terms and Conditions",
    component: TermsAndConditions,
  },
  {
    path: "/cookies",
    name: "Cookies Policy",
    component: CookiesPolicy,
  },
  {
    path: "/support",
    name: "Support Service",
    component: SupportService,
  },
  {
    path: "/true-fi-privacy",
    name: "Sonarworks True-Fi Privacy Statement",
    component: TrueFiPrivacy,
  },
  {
    path: "/eula",
    name: "End-User License Agreement",
    component: EndUserLicenseAgreement,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;