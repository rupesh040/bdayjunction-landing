import contentData from "./content.json";
import {
  Site,
  Theme,
  Content,
  BirthdayHeader1 as HeaderData,
  BirthdayBanner1 as BannerData,
  BirthdayAbout1 as AboutData,
  BirthdayServices1 as ServicesData,
  BirthdayGallery1 as GalleryData,
  BirthdayTestimonial1 as TestimonialData,
  BirthdayFAQ1 as FAQData,
  BirthdayContact1 as ContactData,
  BirthdayFooter1 as FooterData,
  BirthdayServices1Item as ServiceItem,
  BirthdayTestimonial1Item as TestimonialItem,
  BirthdayFAQ1Item as FAQItem,
  ContactCardItem,
  QuickLink as NavbarItem,
} from "../types/content";

export const site = (contentData as unknown as Content).Birthday.site;
export const theme = (contentData as unknown as Content).Birthday.theme;
const sections = (contentData as unknown as Content).Birthday.sections;

export const header = sections.Header.variants.BirthdayHeader1;
export const banner = sections.Banner.variants.BirthdayBanner1;
export const about = sections.About.variants.BirthdayAbout1;
export const services = sections.Services.variants.BirthdayServices1;
export const gallery = sections.Gallery.variants.BirthdayGallery1;
export const testimonial = sections.Testimonial.variants.BirthdayTestimonial1;
export const faq = sections.FAQ.variants.BirthdayFAQ1;
export const contact = sections.Contact.variants.BirthdayContact1;
export const footer = sections.Footer.variants.BirthdayFooter1;

export const content = contentData as unknown as Content;
export default content;

export type {
  Site,
  Theme,
  HeaderData,
  BannerData,
  AboutData,
  ServicesData,
  GalleryData,
  TestimonialData,
  FAQData,
  ContactData,
  FooterData,
  ServiceItem,
  TestimonialItem,
  FAQItem,
  ContactCardItem,
  NavbarItem,
};
