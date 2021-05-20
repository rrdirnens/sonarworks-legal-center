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
    meta: {title: "Sonarworks Legal Centre"}

  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    component: PrivacyPolicy,
    meta: {title: "Privacy Policy"}

  },
  {
    path: "/partnership",
    name: "Partnership Policy",
    component: PartnershipPolicy,
    meta: {title: "Partnership Policy"}

  },
  {
    path: "/t-and-c",
    name: "Terms and Conditions",
    component: TermsAndConditions,
    meta: {title: "Terms and Conditions"}

  },
  {
    path: "/cookies",
    name: "Cookies Policy",
    component: CookiesPolicy,
    meta: {title: "Cookies Policy"}

  },
  {
    path: "/support",
    name: "Support Service",
    component: SupportService,
    meta: {title: "Support Service"}

  },
  {
    path: "/true-fi-privacy",
    name: "Sonarworks True-Fi Privacy Statement",
    component: TrueFiPrivacy,
    meta: {title: "Sonarworks True-Fi Privacy Statement"}

  },
  {
    path: "/eula",
    name: "End-User License Agreement",
    component: EndUserLicenseAgreement,
    meta: {title: "End-User License Agreement"}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


export default router;