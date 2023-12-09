import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    personalInformation: 'Personal Information',
    productDetails: 'Product Details',
    scanProducts: 'Scan Products',
    scanQr: 'Scan QR code',
    back: 'Back',
    scan: 'Scan',
    color: 'color',
    size: 'size',
    andGet100: ' & get 100 points',
    theReceiptFor: 'the receipt for 120 points',
    buyAndSubmit: 'Buy & Submit',
    addToCart: 'Add To Cart',
  },
  ar: {
    personalInformation: 'معلومات شخصية',
    scanProducts: 'امسح المنتج',
    scanQr: 'امسح الكود',
    back: 'عودة',
    scan: 'صور',
    color: 'اللون',
    size: 'المقاس',
    andGet100: ' و احصل علي 100 نقطة',
    buyAndSubmit: 'شراء وإتمام',
    theReceiptFor: 'إيصال ب 120 نقطة',
    addToCart: 'أضف إلى السلة',
  },
});

export default strings;
