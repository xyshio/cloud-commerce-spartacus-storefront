import { Injectable } from '@angular/core';

@Injectable()
export class CmsModuleConfig {
  server = {
    baseUrl: 'https://localhost:9002',
    occPrefix: '/rest/v2/'
  };

  site = {
    baseSite: 'electronics',
    language: 'en',
    currency: 'USD'
  };

  authentication = {
    client_id: 'mobile_android',
    client_secret: 'secret'
  };

  defaultPageIdForType = {
    ProductPage: ['productDetails'],
    CategoryPage: ['productList', 'productGrid', 'category']
  };

  cmsComponentMapping = {
    CMSLinkComponent: 'LinkComponent',
    SimpleResponsiveBannerComponent: 'ResponsiveBannerComponent',
    SimpleBannerComponent: 'BannerComponent',
    // BreadcrumbComponent:                'BreadcrumbComponent',
    CMSParagraphComponent: 'ParagraphComponent',
    NavigationComponent: 'NavigationComponent',
    FooterNavigationComponent: 'FooterNavigationComponent',
    CategoryNavigationComponent: 'CategoryNavigationComponent',
    ProductAddToCartComponent: 'AddToCartComponent',
    MiniCartComponent: 'MiniCartComponent',
    ProductCarouselComponent: 'ProductCarouselComponent',
    SearchBoxComponent: 'SearchBoxComponent',
    ProductReferencesComponent: 'ProductReferencesComponent',
    // CMSTabParagraphComponent: 'TabParagraphContainerComponent'
    CMSTabParagraphComponent: 'ParagraphComponent'
  };
}
