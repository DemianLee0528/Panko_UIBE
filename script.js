/**
 * Panko 多语言切换 · EN / 中文
 * 点击切换 Hero 标题、导航、部分按钮文字及全站可翻译内容
 */
(function () {
  'use strict';

  var TRANSLATIONS = {
    en: {
      'hero-title': 'Panko: The Soul of Chinese Knots',
      'hero-subtitle': 'Intangible Heritage · Every knot, every loop, crafted with heart',
      'nav-home': 'Home',
      'nav-collection': 'Collection',
      'nav-diy': 'DIY Lab',
      'nav-craftsmanship': 'Craftsmanship',
      'nav-about': 'About Us',
      'craft-title': 'Craftsmanship Journey',
      'craft-desc': 'Four steps to create a traditional Panko',
      'craft-step-1': 'Step 1: Bias Cutting',
      'craft-step-2': 'Step 2: Filling',
      'craft-step-3': 'Step 3: Coiling',
      'craft-step-4': 'Step 4: Shaping',
      'craft-desc-1': 'Bias cutting (斜裁) is the foundation of Panko making. Strips of fabric are cut at a 45° angle to the grain, giving the material the flexibility and drape essential for forming smooth, elegant curves. This precise cut ensures the knot will hold its shape while remaining soft to the touch.',
      'craft-desc-2': 'Filling (填充) adds structure and body to the fabric strips. Cotton or silk threads are carefully inserted along the bias-cut edges, creating a firm core that supports the intricate twists and loops. This step transforms soft fabric into a durable, sculptural form ready for coiling.',
      'craft-desc-3': 'Coiling (盘扎) is where the Panko takes shape. The filled strips are wound and looped into traditional motifs—Ruyi, butterfly, or Pipa—each with its own symbolic meaning. Skilled hands guide the fabric through precise folds, creating the characteristic knots that have adorned Chinese garments for centuries.',
      'craft-desc-4': 'Shaping (定型) is the final refinement. The coiled knot is steamed or pressed to set its form permanently. Every curve is adjusted, every loop aligned, until the Panko achieves the perfect balance of tradition and craftsmanship. The result is a piece that carries both heritage and the maker\'s vision.',
      'social-title': 'Social Impact',
      'social-tagline': 'Empowering Artisans, Preserving Heritage.',
      'social-1': 'Supporting Artisans',
      'social-2': 'Cultural Revival',
      'social-3': 'Conscious Fashion',
      'social-desc-1': 'We provide sustainable income for traditional craftswomen in rural China, turning ancient skills into modern livelihoods.',
      'social-desc-2': 'By documenting and digitizing Panko patterns, we ensure this 1,000-year-old \'Intangible Cultural Heritage\' never fades away.',
      'social-desc-3': 'Each knot is made-to-order from natural silk and cotton, advocating for a \'Slow Fashion\' lifestyle that respects our planet.',
      'social-footer': 'Your purchase is a vote for heritage.',
      'collection-title': 'Collection',
      'collection-desc': 'Traditional craft meets modern elegance',
      'product-ruyi-name': 'Ruyi Panko',
      'product-butterfly-name': 'Butterfly Panko',
      'product-pipa-name': 'Pipa Panko',
      'btn-view-details': 'View Details',
      'btn-quick-view': 'Quick View',
      'btn-add-cart': 'Add to Cart',
      'btn-added': 'Added!',
      'modal-symbolism-label': 'Symbolism',
      'diy-title': 'DIY Lab',
      'diy-desc': 'Choose shape and color to create your unique Panko',
      'diy-shape': 'Choose Shape',
      'diy-shape-desc': 'Select shape',
      'diy-masterpiece': 'Your Masterpiece',
      'diy-masterpiece-desc': 'Your creation',
      'diy-color': 'Choose Color',
      'diy-color-desc': 'Select color',
      'btn-save-design': 'Save My Design',
      'diy-save-title': 'Your Design',
      'diy-save-message': 'Your unique Panko, a blend of heritage and your vision!',
      'diy-save-masterpiece': 'A Unique Masterpiece: Heritage meets your vision',
      'diy-save-tagline': 'A Unique Masterpiece: Heritage meets your vision',
      'diy-save-screenshot-hint': 'Capture this moment — take a screenshot to keep your design.',
      'diy-save-hint': 'Capture this moment — take a screenshot to keep your design.',
      'diy-ticket-badge': 'Intangible Heritage Exhibition',
      'diy-ticket-title': 'Panko Heritage Exhibition',
      'btn-close': 'Close',
      'footer-follow': 'Follow Us',
      'social-modal-title': 'Coming soon!',
      'social-modal-desc': 'Join our global Panko community.',
      'btn-got-it': 'Got it',
      'newsletter-title': 'Stay Connected with Panko Stories.',
      'newsletter-subtitle': 'Subscribe to receive exclusive stories of Chinese craftsmanship, new collection launches, and DIY inspirations.',
      'newsletter-placeholder': 'Your Email Address',
      'newsletter-success': 'Welcome to our community! Keep an eye on your inbox for a touch of heritage.',
      'btn-subscribe': 'Subscribe',
      'about-title': 'Our Story: Five Hearts, One Heritage',
      'about-vision': 'The Vision',
      'about-text-1': 'We are a team of five students from UIBE, a hub of global trade and cultural exchange. We believe that Panko—the traditional Chinese button knot—is more than just a fastener; it is a silent language of oriental wisdom and aesthetic beauty.',
      'about-collab': 'The Collaboration',
      'about-text-2': 'To preserve this fading craft, we\'ve partnered with authentic Intangible Cultural Heritage inheritors. Together, we translate the intricate "twists and turns" of the past into a modern fashion statement for the international market.',
      'about-promise': 'Our Promise',
      'about-text-3': 'Every piece you see is handcrafted, carrying the blessings of traditional Chinese culture. By choosing our Panko, you are not just buying a product; you are supporting a community of artisans and keeping a 1,000-year-old heritage alive.',
      'trust-1-title': 'Traceable Shipping',
      'trust-1-desc': 'Reliable global logistics with end-to-end tracking.',
      'trust-2-title': 'Artisanal Quality',
      'trust-2-desc': '100% handcrafted by certified ICH inheritors.',
      'trust-3-title': 'Secure Experience',
      'trust-3-desc': 'Dedicated customer support for your cultural journey.',
      'trust-4-title': 'Sustainable Packaging',
      'trust-4-desc': 'Eco-friendly packaging that protects both art and nature.',
      'footer-customer-care': 'Customer Care',
      'footer-shipping': 'Shipping Policy',
      'footer-return': 'Return & Refund',
      'footer-track': 'Track Order',
      'footer-about': 'About Us',
      'footer-our-story': 'Our Story',
      'footer-artisans': 'Artisans',
      'footer-contact': 'Contact Us',
      'footer-legal': 'Legal',
      'footer-privacy': 'Privacy Policy',
      'footer-cookie': 'Cookie Policy',
      'footer-terms': 'Terms of Service',
      'footer-copyright': '© 2026 Panko Heritage | Empowered by UIBE Team. All Rights Reserved.',
      'feedback-title': 'Your Feedback',
      'feedback-desc': 'We welcome your suggestions and collaboration inquiries',
      'feedback-name': 'Name',
      'feedback-email': 'Email',
      'feedback-message': 'Message',
      'feedback-placeholder-name': 'Enter your name',
      'feedback-placeholder-email': 'Enter your email',
      'feedback-placeholder-message': 'Share your thoughts...',
      'btn-submit': 'Submit',
      'modal-qty': 'Quantity',
      'modal-gift-wrap': 'Gift Wrap with Handmade Card (+$5)',
      'modal-notes-label': 'Message for the artisan (e.g., specific sizing)',
      'modal-notes-placeholder': 'Optional message for the artisan...',
      'btn-buy-now': 'Buy Now',
      'modal-secure-checkout': 'Secure Checkout',
      'modal-ships-worldwide': 'Ships Worldwide',
      'certificate-thanks': 'Thank You for Supporting Non-material Heritage!',
      'certificate-subtitle': 'Every knot carries the heartbeat of the artisan',
      'certificate-label': 'Collection Certificate',
      'certificate-craft': '100% Hand-coiled by certified ICH inheritor',
      'certificate-team': 'This piece is brought to you by UIBE students and master artisans.',
      'btn-continue-shopping': 'Continue Shopping',
      'cart-title': 'Your Cart',
      'cart-empty': 'Your cart is currently empty.',
      'cart-subtotal': 'Subtotal',
      'btn-checkout': 'Checkout',
      'btn-add-custom-cart': 'Add Custom Design to Cart',
      'diy-toast-added': 'Your unique design has been added to the cart!',
      'product-bespoke-name': 'Bespoke Panko (Customized)',
      'cart-edit-note': 'Edit note',
      'cart-remove': 'Remove',
      'cart-note-update': 'Update',
      'cart-decrease': 'Decrease',
      'cart-increase': 'Increase',
      'cart-desc-shape': 'Shape',
      'cart-desc-color': 'Color',
      'shape-ruyi': 'Ruyi',
      'shape-butterfly': 'Butterfly',
      'shape-pipa': 'Pipa',
      'color-c41e3a': 'Chinese Red',
      'color-d4af37': 'Gold',
      'color-2b2b2b': 'Ink',
      'color-00a86b': 'Jade Green',
      'partners-title': 'Strategic Support',
      'partner-uibe': 'UIBE',
      'partner-icha': 'Intangible Cultural Heritage Association',
      'partner-innovator': 'Innovator Competition',
      'partner-icha-short': 'ICHA',
      'partner-innovator-short': 'IC',
      'about-signature': '— Panko Heritage Team',
      'modal-tab-details': 'Details',
      'modal-tab-reviews': 'Reviews',
      'modal-reviews-score': '4.9',
      'modal-verified-purchase': 'Verified Purchase',
      'review-1-author': 'Sarah L. from Paris',
      'review-1-text': 'Absolutely stunning craftsmanship. It\'s not just a button, it\'s a piece of art!',
      'review-1-date': 'Dec 15, 2025',
      'review-2-author': 'James W. from London',
      'review-2-text': 'The bespoke service is amazing. Perfect for my custom suit.',
      'review-2-date': 'Nov 28, 2025',
      'review-3-author': 'Emma K. from New York',
      'review-3-text': 'Elegant and timeless. The quality exceeded my expectations.',
      'review-3-date': 'Nov 10, 2025',
      'review-4-author': 'Chen M. from Singapore',
      'review-4-text': 'A beautiful fusion of tradition and modernity. Highly recommend!',
      'review-4-date': 'Oct 22, 2025',
      'artisan-name-title': 'Teacher Hu Ling — ICH Inheritor of Panko Art',
      'artisan-intro': 'For over thirty years, she has devoted herself to the ancient craft of Panko. With every stitch and every loop, she weaves together tradition and modernity—transforming silk and thread into timeless pieces that carry the soul of Chinese heritage. Her hands tell stories that words cannot.',
      'artisan-quote': 'Every knot carries the heartbeat of time.',
      'artisan-tag-experience': '30+ Years Experience',
      'artisan-tag-certified': 'National Certified',
      'btn-share-friends': 'Share with friends',
      'referral-generated': 'Generated your referral link:',
      'referral-discount': 'Friends can enjoy 15% off with this link.',
      'footer-newsletter-text': 'Join our heritage community for exclusive artisan stories.',
      'shape-tip-ruyi-en': 'Good fortune, wishes fulfilled. A symbol of prosperity and harmony.',
      'shape-tip-ruyi-zh': '吉祥如意、心想事成，象征富贵与和谐。',
      'shape-tip-butterfly-en': 'Beauty, grace, enduring love. Echoes the elegance of cheongsam.',
      'shape-tip-butterfly-zh': '美丽、优雅与永恒之爱，呼应旗袍的典雅气质。',
      'shape-tip-pipa-en': 'Classical refinement, cultural heritage. Inspired by the Pipa instrument.',
      'shape-tip-pipa-zh': '雅致与文化传承，灵感源自琵琶乐器。'
    },
    zh: {
      'hero-title': 'Panko：中国结之魂',
      'hero-subtitle': '非遗盘扣 · 一扣一结，皆是匠心',
      'nav-home': '首页',
      'nav-collection': '精选',
      'nav-diy': 'DIY 工坊',
      'nav-craftsmanship': '制作流程',
      'nav-about': '关于我们',
      'craft-title': '制作流程',
      'craft-desc': '传统盘扣的四个核心步骤',
      'craft-step-1': '步骤一：斜裁',
      'craft-step-2': '步骤二：填充',
      'craft-step-3': '步骤三：盘扎',
      'craft-step-4': '步骤四：定型',
      'craft-desc-1': '斜裁是盘扣制作的基础。将布料沿 45° 斜向裁切，赋予材料形成柔美曲线所需的弹性与垂坠感。这一精确裁切确保盘扣既保持形状，又触感柔软。',
      'craft-desc-2': '填充为布料条增添结构感。棉线或丝线沿斜裁边缘精心插入，形成坚固的核心，支撑复杂的盘绕与扭结。此步骤将柔软布料转化为可塑的立体形态。',
      'craft-desc-3': '盘扎是盘扣成型的关键。填充后的布条被盘绕成传统纹样——如意、蝴蝶或琵琶，各具寓意。巧手引导布料完成精确折叠，创造出千年来装饰中国服饰的经典盘扣。',
      'craft-desc-4': '定型是最后的精修。盘好的结扣经蒸或压定型，每一道弧线都经过调整，每一个环扣都对齐，直到盘扣达到传统与技艺的完美平衡。成品承载着传承与匠人的心意。',
      'social-title': '社会影响',
      'social-tagline': '赋能匠人 · 传承文化',
      'social-1': '支持匠人',
      'social-2': '文化复兴',
      'social-3': '可持续时尚',
      'social-desc-1': '我们为乡村传统手工艺人提供可持续收入，将古老技艺转化为现代生计。',
      'social-desc-2': '通过记录和数字化盘扣纹样，我们确保这一千年「非遗」永不消逝。',
      'social-desc-3': '每件盘扣均来自天然丝棉，按需定制，倡导尊重地球的「慢时尚」生活方式。',
      'social-footer': '您的购买是对文化遗产的支持。',
      'collection-title': '精选',
      'collection-desc': '传统工艺与现代优雅的融合',
      'product-ruyi-name': '如意盘扣',
      'product-butterfly-name': '蝴蝶盘扣',
      'product-pipa-name': '琵琶盘扣',
      'btn-view-details': '查看详情',
      'btn-quick-view': '快速预览',
      'btn-add-cart': '加入购物车',
      'btn-added': '已加入！',
      'modal-symbolism-label': '寓意',
      'diy-title': 'DIY 工坊',
      'diy-desc': '选择形状与颜色，创作专属盘扣',
      'diy-shape': '选择形状',
      'diy-shape-desc': '选择形状',
      'diy-masterpiece': '你的杰作',
      'diy-masterpiece-desc': '你的创作',
      'diy-color': '选择颜色',
      'diy-color-desc': '选择颜色',
      'btn-save-design': '保存设计',
      'diy-save-tagline': '独特杰作：传承与你的创意相遇',
      'diy-save-hint': '截图保存这一刻的美好。',
      'diy-ticket-badge': '非遗展览',
      'diy-ticket-title': 'Panko 非遗盘扣展览',
      'btn-close': '关闭',
      'footer-follow': '关注我们',
      'social-modal-title': '敬请期待！',
      'social-modal-desc': '加入全球 Panko 非遗社区。',
      'btn-got-it': '知道了',
      'newsletter-title': '与 Panko 故事保持联系',
      'newsletter-subtitle': '订阅获取中国匠艺独家故事、新品发布与 DIY 灵感。',
      'newsletter-placeholder': '请输入您的邮箱',
      'newsletter-success': '欢迎加入！请留意您的收件箱，我们将为您带来非遗之美。',
      'btn-subscribe': '订阅',
      'about-title': '我们的故事：五心一脉，传承非遗',
      'about-vision': '愿景',
      'about-text-1': '我们是来自对外经济贸易大学的五名学生，身处全球贸易与文化交汇的枢纽。我们相信盘扣——这一传统中国纽结——不仅是扣件，更是东方智慧与美学之美的无声语言。',
      'about-collab': '合作',
      'about-text-2': '为保护这一日渐式微的技艺，我们与正宗非遗传承人携手合作。共同将昔日的「盘绕曲折」转化为面向国际市场的现代时尚表达。',
      'about-promise': '承诺',
      'about-text-3': '您所见的每一件作品均为手工制作，承载着传统中国文化的祝福。选择我们的盘扣，您不仅是在购买产品，更是在支持匠人群体，让千年传承生生不息。',
      'trust-1-title': '物流可追踪',
      'trust-1-desc': '可靠的全球物流，全程可追踪。',
      'trust-2-title': '匠人品质',
      'trust-2-desc': '100% 由认证非遗传承人手工制作。',
      'trust-3-title': '安心体验',
      'trust-3-desc': '为您的文化之旅提供专属客服支持。',
      'trust-4-title': '环保包装',
      'trust-4-desc': '保护艺术与自然的环保包装。',
      'footer-customer-care': '客户服务',
      'footer-shipping': '配送政策',
      'footer-return': '退换货',
      'footer-track': '订单追踪',
      'footer-about': '关于我们',
      'footer-our-story': '我们的故事',
      'footer-artisans': '匠人',
      'footer-contact': '联系我们',
      'footer-legal': '法律条款',
      'footer-privacy': '隐私政策',
      'footer-cookie': 'Cookie 政策',
      'footer-terms': '服务条款',
      'footer-copyright': '© 2026 Panko Heritage | 由 UIBE 团队赋能。版权所有。',
      'feedback-title': '您的反馈',
      'feedback-desc': '欢迎留下建议或合作意向',
      'feedback-name': '姓名',
      'feedback-email': '邮箱',
      'feedback-message': '留言',
      'feedback-placeholder-name': '请输入您的姓名',
      'feedback-placeholder-email': '请输入您的邮箱',
      'feedback-placeholder-message': '请写下您的想法...',
      'btn-submit': '提交',
      'modal-qty': '数量',
      'modal-gift-wrap': '礼品包装 + 手写贺卡（+¥36）',
      'modal-notes-label': '给匠人的留言（如：特殊尺寸需求）',
      'modal-notes-placeholder': '可选：给匠人的留言...',
      'btn-buy-now': '立即购买',
      'modal-secure-checkout': '安全结账',
      'modal-ships-worldwide': '全球配送',
      'certificate-thanks': '感谢您支持非遗传承！',
      'certificate-subtitle': '每一枚盘扣都承载着匠人的心跳',
      'certificate-label': '收藏证书',
      'certificate-craft': '100% 由认证非遗传承人手工盘制',
      'certificate-team': '此作品由对外经济贸易大学学子与非遗大师共同呈现。',
      'btn-continue-shopping': '继续选购',
      'cart-title': '购物车',
      'cart-empty': '您的购物车目前是空的。',
      'cart-subtotal': '小计',
      'btn-checkout': '去结账',
      'btn-add-custom-cart': '将定制款加入购物车',
      'diy-toast-added': '您的独特设计已加入购物车！',
      'product-bespoke-name': '定制盘扣',
      'cart-edit-note': '修改备注',
      'cart-remove': '删除',
      'cart-note-update': '更新',
      'cart-decrease': '减少',
      'cart-increase': '增加',
      'cart-desc-shape': '形状',
      'cart-desc-color': '颜色',
      'shape-ruyi': '如意',
      'shape-butterfly': '蝴蝶',
      'shape-pipa': '琵琶',
      'color-c41e3a': '中国红',
      'color-d4af37': '琉璃金',
      'color-2b2b2b': '墨色',
      'color-00a86b': '翡翠绿',
      'partners-title': '战略支持',
      'partner-uibe': '对外经济贸易大学',
      'partner-icha': '非物质文化遗产协会',
      'partner-innovator': '创新者大赛',
      'partner-icha-short': '非遗',
      'partner-innovator-short': '创新',
      'about-signature': '— Panko 传承团队',
      'modal-tab-details': '细节详情',
      'modal-tab-reviews': '用户评价',
      'modal-reviews-score': '4.9',
      'modal-verified-purchase': '已购款项',
      'review-1-author': '来自巴黎的 Sarah L.',
      'review-1-text': '精湛的工艺，这简直是艺术品！远不止是一枚扣子。',
      'review-1-date': '2025年12月15日',
      'review-2-author': '来自伦敦的 James W.',
      'review-2-text': '定制服务太棒了，完美搭配我的定制西装。',
      'review-2-date': '2025年11月28日',
      'review-3-author': '来自纽约的 Emma K.',
      'review-3-text': '优雅永恒，品质超出预期。',
      'review-3-date': '2025年11月10日',
      'review-4-author': '来自新加坡的 Chen M.',
      'review-4-text': '传统与现代的完美融合，强烈推荐！',
      'review-4-date': '2025年10月22日',
      'artisan-name-title': '胡玲老师 — 盘扣艺术非遗传承人',
      'artisan-intro': '三十余年来，她将全部心血倾注于古老的盘扣技艺。一针一线，她将传统与现代交织——把丝线与布条化作承载中华文化灵魂的永恒之作。她的双手诉说着言语无法表达的故事。',
      'artisan-quote': '每一枚盘扣，都承载着时光的心跳。',
      'artisan-tag-experience': '三十年以上技艺',
      'artisan-tag-certified': '国家级认证',
      'btn-share-friends': '分享给好友',
      'referral-generated': '已生成您的专属推荐链接：',
      'referral-discount': '好友通过此链接可享 15% 折扣。',
      'footer-newsletter-text': '加入非遗社区，获取匠人独家故事。',
      'shape-tip-ruyi-en': 'Good fortune, wishes fulfilled. A symbol of prosperity and harmony.',
      'shape-tip-ruyi-zh': '吉祥如意、心想事成，象征富贵与和谐。',
      'shape-tip-butterfly-en': 'Beauty, grace, enduring love. Echoes the elegance of cheongsam.',
      'shape-tip-butterfly-zh': '美丽、优雅与永恒之爱，呼应旗袍的典雅气质。',
      'shape-tip-pipa-en': 'Classical refinement, cultural heritage. Inspired by the Pipa instrument.',
      'shape-tip-pipa-zh': '雅致与文化传承，灵感源自琵琶乐器。',
      'legal-demo-title': '演示版本',
      'legal-demo-desc': '此为面向竞赛评委的合规占位说明。正式上线后将实现完整的隐私政策、Cookie 政策及服务条款页面。',
      'legal-demo-got-it': '知道了'
    }
  };

  TRANSLATIONS.en['legal-demo-title'] = 'Demo Version';
  TRANSLATIONS.en['legal-demo-desc'] = 'This is a compliance placeholder for competition judges. Full legal pages (Privacy Policy, Cookie Policy, Terms of Service) will be implemented upon project launch.';
  TRANSLATIONS.en['legal-demo-got-it'] = 'Got it';

  var currentLang = 'en';
  var langBtns = document.querySelectorAll('.lang-btn');

  function applyLang(lang) {
    currentLang = lang;
    var t = TRANSLATIONS[lang];
    if (!t) return;
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    placeholderEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key && t[key]) el.setAttribute('placeholder', t[key]);
    });
    var addCartBtn = document.getElementById('modal-add-cart');
    if (addCartBtn) {
      addCartBtn.textContent = addCartBtn.classList.contains('is-added') ? (t['btn-added'] || 'Added!') : (t['btn-add-cart'] || 'Add to Cart');
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    langBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    updateProductCardPrices();
    window.dispatchEvent(new CustomEvent('panko:lang-change', { detail: { lang: lang } }));
  }

  var elements = document.querySelectorAll('[data-i18n]');
  var placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');

  var CNY_RATE = 7.2;

  function formatPrice(usdAmount) {
    var num = parseFloat(usdAmount) || 0;
    if (currentLang === 'zh') {
      return '¥ ' + Math.round(num * CNY_RATE);
    }
    return '$ ' + num;
  }

  function updateProductCardPrices() {
    document.querySelectorAll('.product-card[data-product]').forEach(function (card) {
      var price = card.getAttribute('data-price');
      var el = card.querySelector('.product-price');
      if (el && price) el.textContent = formatPrice(price);
    });
  }

  window.PankoI18n = {
    get: function (key) { return (TRANSLATIONS[currentLang] || {})[key] || key; },
    lang: function () { return currentLang; },
    formatPrice: formatPrice
  };

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });
})();

/**
 * Panko 全局微动效
 * 1. 导航栏：滚动时背景变为半透明云白 + 模糊
 * 2. 板块淡入：滚动时各 section 从下方升起并淡入（Reveal on scroll）
 */
(function () {
  'use strict';

  var header = document.querySelector('.header');
  var sections = document.querySelectorAll('.section-reveal');

  /** 导航栏：滚动超过 50px 时启用玻璃拟态 */
  function updateHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', function () {
    updateHeaderScroll();
  }, { passive: true });
  updateHeaderScroll();

  /** 板块淡入：Intersection Observer 检测进入视口后添加 .is-visible */
  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    sections.forEach(function (section) {
      if (!section.classList.contains('is-visible')) observer.observe(section);
    });
  }
})();

/**
 * Panko 购物车 · 动态购物车侧边栏
 * 数量加减、备注修改、删除商品、实时金额联动
 */
(function () {
  'use strict';

  var cartItems = [];
  var cartSidebar = document.getElementById('cart-sidebar');
  var cartTrigger = document.getElementById('cart-trigger');
  var cartBadge = document.getElementById('cart-badge');
  var cartList = document.getElementById('cart-list');
  var cartEmpty = document.getElementById('cart-empty');
  var cartFooter = document.getElementById('cart-footer');
  var cartSubtotal = document.getElementById('cart-subtotal');
  var closeCartButtons = document.querySelectorAll('[data-close-cart]');

  function getLang() {
    return (window.PankoI18n && window.PankoI18n.lang()) || 'en';
  }

  function getTotalCount() {
    return cartItems.reduce(function (sum, item) { return sum + item.quantity; }, 0);
  }

  function getSubtotal() {
    return cartItems.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
  }

  function updateBadge() {
    if (!cartBadge) return;
    var count = getTotalCount();
    cartBadge.textContent = count;
    cartBadge.setAttribute('data-count', count);
    cartBadge.classList.toggle('is-empty', count === 0);
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderCart() {
    if (!cartList || !cartEmpty || !cartFooter || !cartSubtotal) return;
    var lang = getLang();

    if (cartItems.length === 0) {
      cartEmpty.hidden = false;
      cartList.innerHTML = '';
      cartFooter.hidden = true;
      return;
    }

    cartEmpty.hidden = true;
    cartFooter.hidden = false;

    var subtotal = getSubtotal();
    var formatPrice = window.PankoI18n && window.PankoI18n.formatPrice;
    cartSubtotal.textContent = formatPrice ? formatPrice(subtotal) : ('$ ' + subtotal.toFixed(0));

    var i18n = window.PankoI18n && window.PankoI18n.get;
    var editNoteLabel = i18n ? i18n('cart-edit-note') : 'Edit note';
    var removeLabel = i18n ? i18n('cart-remove') : 'Remove';

    cartList.innerHTML = cartItems.map(function (item) {
      var name = lang === 'zh' ? (item.nameZh || item.name) : item.name;
      var desc = '';
      if (item.isCustom && item.shapeKey && item.colorKey) {
        var shapeLabel = i18n ? i18n('cart-desc-shape') : 'Shape';
        var colorLabel = i18n ? i18n('cart-desc-color') : 'Color';
        var shapeVal = i18n ? i18n('shape-' + item.shapeKey) : item.shapeKey;
        var colorVal = i18n ? i18n('color-' + item.colorKey) : item.colorHex;
        desc = '<span class="cart-item-desc">' + shapeLabel + ': ' + shapeVal + ', ' + colorLabel + ': ' + colorVal + '</span>';
      }
      var priceStr = formatPrice ? formatPrice(item.price) : ('$ ' + item.price);
      var itemId = (item.id || '').replace(/"/g, '&quot;');
      var noteVal = escapeHtml(item.note || '');
      var updateLabel = i18n ? i18n('cart-note-update') : 'Update';
      return '<li class="cart-item" data-id="' + itemId + '">' +
        '<button type="button" class="cart-item-remove" aria-label="' + removeLabel + '" title="' + removeLabel + '">&times;</button>' +
        '<img class="cart-item-image" src="' + (item.image || '') + '" alt="' + escapeHtml(name) + '" loading="lazy">' +
        '<div class="cart-item-info">' +
          '<span class="cart-item-name">' + escapeHtml(name) + '</span>' +
          (desc || '') +
          '<span class="cart-item-price">' + priceStr + '</span>' +
          '<div class="cart-item-qty-row">' +
            '<div class="cart-qty-selector">' +
              '<button type="button" class="cart-qty-btn cart-qty-minus" aria-label="' + (i18n ? i18n('cart-decrease') : 'Decrease') + '">−</button>' +
              '<span class="cart-qty-value">' + item.quantity + '</span>' +
              '<button type="button" class="cart-qty-btn cart-qty-plus" aria-label="' + (i18n ? i18n('cart-increase') : 'Increase') + '">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="cart-item-note-wrap">' +
            '<button type="button" class="cart-edit-note-btn">' + editNoteLabel + '</button>' +
            '<div class="cart-note-input-wrap" hidden>' +
              '<input type="text" class="cart-note-input" value="' + noteVal + '" placeholder="' + (i18n ? i18n('modal-notes-placeholder') : 'Optional message...') + '">' +
              '<button type="button" class="cart-note-update-btn">' + updateLabel + '</button>' +
            '</div>' +
            (item.note ? '<p class="cart-item-note-preview">' + escapeHtml(item.note) + '</p>' : '') +
          '</div>' +
        '</div>' +
      '</li>';
    }).join('');
  }

  function openCart() {
    if (cartSidebar) {
      cartSidebar.classList.add('is-open');
      cartSidebar.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
  }

  function closeCart() {
    if (cartSidebar) {
      cartSidebar.classList.remove('is-open');
      cartSidebar.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }
  }

  function findItemById(id) {
    return cartItems.filter(function (i) { return (i.id || i.name) === id; })[0];
  }

  function removeItem(id) {
    cartItems = cartItems.filter(function (i) { return (i.id || i.name) !== id; });
    updateBadge();
    renderCart();
  }

  function updateQuantity(id, delta) {
    var item = findItemById(id);
    if (!item) return;
    item.quantity = Math.max(0, item.quantity + delta);
    if (item.quantity <= 0) {
      removeItem(id);
    } else {
      updateBadge();
      renderCart();
    }
  }

  function updateNote(id, note) {
    var item = findItemById(id);
    if (!item) return;
    item.note = (note || '').trim();
    updateBadge();
    renderCart();
  }

  window.PankoCart = {
    addToCart: function (product) {
      var id = product.id || product.name || '';
      var qty = Math.max(1, parseInt(product.quantity, 10) || 1);
      var note = (product.note || '').trim();
      var existing = findItemById(id);
      if (existing) {
        existing.quantity += qty;
        if (note) existing.note = note;
      } else {
        var newItem = {
          id: id,
          name: product.name || '',
          nameZh: product.nameZh || '',
          image: product.image || '',
          price: parseFloat(product.price) || 0,
          quantity: qty,
          note: note
        };
        if (product.isCustom) {
          newItem.isCustom = true;
          newItem.shapeKey = product.shapeKey || '';
          newItem.colorKey = product.colorKey || '';
          newItem.colorHex = product.colorHex || '';
        }
        cartItems.push(newItem);
      }
      updateBadge();
      renderCart();
    },
    removeItem: removeItem,
    updateQuantity: updateQuantity,
    updateNote: updateNote
  };

  updateBadge();
  renderCart();

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  closeCartButtons.forEach(function (btn) {
    btn.addEventListener('click', closeCart);
  });

  var btnCheckout = document.querySelector('.btn-checkout');
  if (btnCheckout) {
    btnCheckout.addEventListener('click', function () {
      if (cartItems.length === 0) return;
      closeCart();
      if (typeof window.PankoOpenCertificate === 'function') window.PankoOpenCertificate();
    });
  }

  if (cartList) cartList.addEventListener('click', function (e) {
    var itemEl = e.target.closest('.cart-item');
    if (!itemEl) return;
    var id = itemEl.getAttribute('data-id');
    if (!id) return;

    if (e.target.closest('.cart-item-remove')) {
      removeItem(id);
      return;
    }
    if (e.target.closest('.cart-qty-minus')) {
      updateQuantity(id, -1);
      return;
    }
    if (e.target.closest('.cart-qty-plus')) {
      updateQuantity(id, 1);
      return;
    }
    if (e.target.closest('.cart-edit-note-btn')) {
      var wrap = itemEl.querySelector('.cart-item-note-wrap');
      if (wrap) {
        var inputWrap = wrap.querySelector('.cart-note-input-wrap');
        var preview = wrap.querySelector('.cart-item-note-preview');
        var btn = wrap.querySelector('.cart-edit-note-btn');
        if (inputWrap && btn) {
          btn.hidden = true;
          if (preview) preview.hidden = true;
          inputWrap.hidden = false;
          var input = inputWrap.querySelector('.cart-note-input');
          if (input) {
            input.value = (findItemById(id) || {}).note || '';
            input.focus();
          }
        }
      }
      return;
    }
    if (e.target.closest('.cart-note-update-btn')) {
      var input = itemEl.querySelector('.cart-note-input');
      if (input) {
        updateNote(id, input.value);
      }
      return;
    }
  });

  window.addEventListener('panko:lang-change', function () {
    renderCart();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cartSidebar && cartSidebar.classList.contains('is-open')) closeCart();
  });
})();

/**
 * Panko Craftsmanship Journey · 步骤进度条内容切换
 * 点击或悬停节点 → 下方内容平滑淡入淡出
 */
(function () {
  'use strict';

  var nodes = document.querySelectorAll('.craft-step-node');
  var panels = document.querySelectorAll('.craft-panel');

  if (!nodes.length || !panels.length) return;

  function showStep(stepNum) {
    var n = parseInt(stepNum, 10);
    if (n < 1 || n > 4) return;
    nodes.forEach(function (node) {
      var active = node.getAttribute('data-step') === String(n);
      node.classList.toggle('active', active);
      node.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    panels.forEach(function (panel) {
      var id = panel.getAttribute('id');
      var match = id && id === 'craft-panel-' + n;
      panel.classList.toggle('is-active', match);
      panel.hidden = !match;
    });
  }

  nodes.forEach(function (node) {
    node.addEventListener('click', function () {
      showStep(node.getAttribute('data-step'));
    });
    node.addEventListener('mouseenter', function () {
      showStep(node.getAttribute('data-step'));
    });
  });
})();

/**
 * Panko DIY Lab · 形状 + 颜色双重选择
 * 左：形状 | 中：杰作预览 + Save My Design | 右：颜色
 */
(function () {
  'use strict';

  const knotSvg = document.getElementById('diy-knot-svg');
  const knotShape = document.getElementById('diy-knot-shape');
  const shapeButtons = document.querySelectorAll('.diy-shape-btn');
  const colorButtons = document.querySelectorAll('.diy-color-btn');
  const saveModal = document.getElementById('diy-save-modal');
  const savePreview = document.getElementById('diy-save-modal-preview');
  const saveDesignBtn = document.getElementById('diy-save-design');
  const closeSaveButtons = document.querySelectorAll('[data-close-diy-save]');

  if (!knotSvg || !knotShape || !shapeButtons.length || !colorButtons.length) return;

  const SHAPES = {
    ruyi: '<path d="M60 18 C32 18 18 38 18 60 C18 88 38 102 60 102 C82 102 102 88 102 60 C102 38 88 18 60 18 Z"/><path d="M60 32 C42 32 32 46 32 60 C32 76 46 88 60 88 C74 88 88 76 88 60 C88 46 78 32 60 32 Z"/><rect x="52" y="48" width="16" height="24" rx="2"/>',
    butterfly: '<ellipse cx="60" cy="55" rx="28" ry="22"/><path d="M32 55 Q20 35 35 25 Q50 45 60 55 Q70 45 85 25 Q100 35 88 55 Q75 70 60 75 Q45 70 32 55 Z"/><rect x="56" y="48" width="8" height="18" rx="2"/>',
    pipa: '<path d="M60 20 C25 20 18 50 18 60 C18 85 38 100 60 100 C82 100 102 85 102 60 C102 50 95 20 60 20 Z M60 38 C38 38 34 52 34 60 C34 78 48 88 60 88 C72 88 86 78 86 60 C86 52 82 38 60 38 Z"/><path d="M52 52 L68 52 L68 72 L52 72 Z" transform="rotate(-8 60 62)"/>'
  };

  const state = { shape: 'ruyi', color: '#C41E3A' };

  function updatePreview() {
    const html = SHAPES[state.shape];
    if (html) knotShape.innerHTML = html;
    knotSvg.style.color = state.color;
  }

  function setActiveShape(shapeId) {
    shapeButtons.forEach(function (btn) {
      const active = btn.getAttribute('data-shape') === shapeId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setActiveColor(hexColor) {
    const norm = (hexColor || '').toUpperCase();
    colorButtons.forEach(function (btn) {
      const active = (btn.getAttribute('data-color') || '').toUpperCase() === norm;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function openSaveModal() {
    if (!saveModal || !savePreview) return;
    const svgClone = knotSvg.cloneNode(true);
    svgClone.removeAttribute('id');
    svgClone.style.color = state.color;
    const g = svgClone.querySelector('.knot-fill');
    if (g) g.setAttribute('fill', state.color);
    savePreview.innerHTML = '';
    savePreview.appendChild(svgClone);
    saveModal.classList.add('is-open');
    saveModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeSaveModal() {
    if (!saveModal) return;
    saveModal.classList.remove('is-open');
    saveModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  updatePreview();
  setActiveShape('ruyi');
  setActiveColor('#C41E3A');

  shapeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const shapeId = btn.getAttribute('data-shape');
      if (!shapeId || !SHAPES[shapeId]) return;
      state.shape = shapeId;
      updatePreview();
      setActiveShape(shapeId);
    });
  });

  colorButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const color = btn.getAttribute('data-color');
      if (!color) return;
      state.color = color;
      updatePreview();
      setActiveColor(color);
    });
  });

  if (saveDesignBtn) saveDesignBtn.addEventListener('click', openSaveModal);
  closeSaveButtons.forEach(function (btn) { btn.addEventListener('click', closeSaveModal); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && saveModal && saveModal.classList.contains('is-open')) closeSaveModal();
  });

  /** 将定制款加入购物车 */
  var addCustomCartBtn = document.getElementById('diy-add-to-cart');
  var toastEl = document.getElementById('diy-toast');

  function hexToColorKey(hex) {
    if (!hex) return '';
    return (hex.replace('#', '') || '').toLowerCase();
  }

  function createKnotSvgDataUrl(shapeId, color) {
    var paths = SHAPES[shapeId] || SHAPES.ruyi;
    var c = (color || '#C41E3A').replace('#', '%23');
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><g fill="' + c + '">' + paths + '</g></svg>';
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('diy-toast-visible');
    setTimeout(function () {
      toastEl.classList.remove('diy-toast-visible');
    }, 2800);
  }

  if (addCustomCartBtn && window.PankoCart) {
    addCustomCartBtn.addEventListener('click', function () {
      var shapeKey = state.shape || 'ruyi';
      var colorHex = state.color || '#C41E3A';
      var colorKey = hexToColorKey(colorHex);
      var id = 'bespoke-' + shapeKey + '-' + colorKey;
      var i18n = window.PankoI18n && window.PankoI18n.get;

      window.PankoCart.addToCart({
        id: id,
        name: 'Bespoke Panko (Customized)',
        nameZh: '定制盘扣',
        image: createKnotSvgDataUrl(shapeKey, colorHex),
        price: 35,
        quantity: 1,
        isCustom: true,
        shapeKey: shapeKey,
        colorKey: colorKey,
        colorHex: colorHex
      });

      showToast(i18n ? i18n('diy-toast-added') : 'Your unique design has been added to the cart!');
    });
  }
})();

/**
 * Panko Collection · 产品详情弹窗与模拟购买
 * 点击 Add to Cart / Buy Now → 关闭产品弹窗 → 展示电子收藏证书弹窗
 */
(function () {
  'use strict';

  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-product-image');
  const modalPrice = document.getElementById('modal-price');
  const modalSymbolism = document.getElementById('modal-symbolism');
  const modalTag = document.getElementById('modal-tag');
  const modalAddCart = document.getElementById('modal-add-cart');
  const modalBuyNow = document.getElementById('modal-buy-now');
  const modalQty = document.getElementById('modal-qty');
  const modalGiftWrap = document.getElementById('modal-gift-wrap');
  const modalNotes = document.getElementById('modal-notes');
  const overlay = modal ? modal.querySelector('.modal-overlay') : null;
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const productCards = document.querySelectorAll('.product-card[data-product]');

  const certModal = document.getElementById('certificate-modal');
  const certIdEl = document.getElementById('certificate-id');
  const certCloseButtons = document.querySelectorAll('[data-close-certificate]');
  const certOverlay = certModal ? certModal.querySelector('.modal-overlay') : null;

  if (!modal || !modalAddCart) return;

  var modalTabs = modal.querySelectorAll('.modal-tab');
  var modalTabsContainer = modal.querySelector('.modal-tabs');
  var modalDetailsPanel = document.getElementById('modal-details-panel');
  var modalReviewsPanel = document.getElementById('modal-reviews-panel');

  function switchProductTab(tabId) {
    modalTabs.forEach(function (t) {
      var active = t.getAttribute('data-tab') === tabId;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (modalTabsContainer) {
      modalTabsContainer.classList.toggle('is-reviews', tabId === 'reviews');
    }
    if (modalDetailsPanel) {
      modalDetailsPanel.classList.toggle('is-active', tabId === 'details');
      modalDetailsPanel.hidden = tabId !== 'details';
    }
    if (modalReviewsPanel) {
      modalReviewsPanel.classList.toggle('is-active', tabId === 'reviews');
      modalReviewsPanel.hidden = tabId !== 'reviews';
    }
  }

  modalTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchProductTab(tab.getAttribute('data-tab'));
    });
  });

  /** 生成唯一证书编号 */
  function generateCertId() {
    var n = Math.floor(Math.random() * 900) + 100;
    return 'PANKO-2026-' + String(n).padStart(3, '0');
  }

  var currentCard = null;

  function getLang() {
    return (window.PankoI18n && window.PankoI18n.lang()) || 'en';
  }

  function fillModalFromCard(card) {
    if (!card) return;
    var lang = getLang();
    var name = lang === 'zh' ? (card.getAttribute('data-name-zh') || card.getAttribute('data-name') || '') : (card.getAttribute('data-name') || '');
    var image = card.getAttribute('data-image') || '';
    var price = card.getAttribute('data-price') || '';
    var symbolism = lang === 'zh' ? (card.getAttribute('data-symbolism-zh') || card.getAttribute('data-symbolism') || '') : (card.getAttribute('data-symbolism') || '');
    var tag = lang === 'zh' ? (card.getAttribute('data-tag-zh') || card.getAttribute('data-tag') || '') : (card.getAttribute('data-tag') || '');

    modalTitle.textContent = name;
    modalImage.src = image;
    modalImage.alt = name;
    modalPrice.textContent = (window.PankoI18n && window.PankoI18n.formatPrice(price)) || ('$ ' + price);
    modalSymbolism.textContent = symbolism;
    modalTag.textContent = tag;
  }

  /** 打开产品弹窗并填充数据 */
  function openModal(card) {
    if (!card) return;
    currentCard = card;
    fillModalFromCard(card);

    modalAddCart.textContent = (window.PankoI18n && window.PankoI18n.get('btn-add-cart')) || 'Add to Cart';
    modalAddCart.classList.remove('is-added');

    switchProductTab('details');

    if (modalQty) modalQty.value = 1;
    if (modalGiftWrap) modalGiftWrap.checked = false;
    if (modalNotes) modalNotes.value = '';

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  /** 关闭产品弹窗 */
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    currentCard = null;
  }

  window.addEventListener('panko:lang-change', function () {
    if (currentCard && modal.classList.contains('is-open')) {
      fillModalFromCard(currentCard);
    }
  });

  /** 打开证书弹窗 */
  function openCertificateModal() {
    if (certIdEl) certIdEl.textContent = generateCertId();
    closeModal();
    var refWrap = document.getElementById('certificate-referral-wrap');
    var shareBtn = document.getElementById('btn-share-friends');
    if (refWrap) refWrap.hidden = true;
    if (shareBtn) shareBtn.hidden = false;
    if (certModal) {
      certModal.classList.add('is-open');
      certModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
  }

  /** 关闭证书弹窗 */
  function closeCertificateModal() {
    if (certModal) {
      certModal.classList.remove('is-open');
      certModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }
  }

  /** 点击 Add to Cart 或 Buy Now → 加入购物车 + 展示证书弹窗 */
  function handlePurchase() {
    if (modalAddCart.classList.contains('is-added')) return;
    if (currentCard && window.PankoCart) {
      var qty = modalQty ? Math.max(1, parseInt(modalQty.value, 10) || 1) : 1;
      window.PankoCart.addToCart({
        id: currentCard.getAttribute('data-name') || '',
        name: currentCard.getAttribute('data-name') || '',
        nameZh: currentCard.getAttribute('data-name-zh') || '',
        image: currentCard.getAttribute('data-image') || '',
        price: parseFloat(currentCard.getAttribute('data-price') || 0),
        quantity: qty,
        note: modalNotes ? (modalNotes.value || '').trim() : ''
      });
    }
    modalAddCart.textContent = (window.PankoI18n && window.PankoI18n.get('btn-added')) || 'Added!';
    modalAddCart.classList.add('is-added');
    setTimeout(openCertificateModal, 400);
  }

  modalAddCart.addEventListener('click', handlePurchase);
  if (modalBuyNow) modalBuyNow.addEventListener('click', handlePurchase);

  closeButtons.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });
  if (overlay) overlay.addEventListener('click', closeModal);

  certCloseButtons.forEach(function (btn) {
    btn.addEventListener('click', closeCertificateModal);
  });
  if (certOverlay) certOverlay.addEventListener('click', closeCertificateModal);

  var shareFriendsBtn = document.getElementById('btn-share-friends');
  var referralWrap = document.getElementById('certificate-referral-wrap');
  var referralLinkEl = document.getElementById('certificate-referral-link');
  if (shareFriendsBtn && referralWrap) {
    shareFriendsBtn.addEventListener('click', function () {
      if (referralLinkEl) referralLinkEl.textContent = 'PANKO-FRIEND-2026';
      referralWrap.hidden = false;
      shareFriendsBtn.hidden = true;
    });
  }

  window.PankoOpenCertificate = openCertificateModal;

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (certModal && certModal.classList.contains('is-open')) closeCertificateModal();
    else if (modal.classList.contains('is-open')) closeModal();
  });

  productCards.forEach(function (card) {
    var imageWrap = card.querySelector('.product-image-wrap');
    var viewDetailsLink = card.querySelector('[data-open-modal]');
    var quickViewBtn = card.querySelector('.quick-view-btn');

    if (imageWrap) imageWrap.addEventListener('click', function () { openModal(card); });
    if (viewDetailsLink) {
      viewDetailsLink.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(card);
      });
    }
    if (quickViewBtn) {
      quickViewBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openModal(card);
      });
    }
  });
})();

/**
 * Panko Newsletter · 邮件订阅（前端模拟）
 * 点击 Subscribe → 显示成功提示，隐藏表单
 */
(function () {
  'use strict';

  var form = document.getElementById('newsletter-form');
  var successEl = document.getElementById('newsletter-success');

  if (!form || !successEl) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('is-hidden');
    successEl.hidden = false;
    successEl.classList.add('is-visible');
  });
})();

/**
 * Panko Footer Newsletter · 页脚订阅（前端模拟）
 */
(function () {
  'use strict';

  var form = document.getElementById('footer-newsletter-form');
  var successEl = document.getElementById('footer-newsletter-success');

  if (!form || !successEl) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('is-hidden');
    successEl.hidden = false;
  });
})();

/**
 * Panko 图片加载失败处理
 * 显示中国红边框的优雅占位图
 */
(function () {
  'use strict';

  var PLACEHOLDER_HTML = '<div class="img-error-placeholder">Image unavailable</div>';

  function handleImageError(img) {
    if (!img || img.dataset.errorHandled) return;
    img.dataset.errorHandled = '1';
    var wrap = img.parentElement;
    if (wrap) {
      var placeholder = document.createElement('div');
      placeholder.className = 'img-error-placeholder';
      placeholder.textContent = 'Image unavailable';
      img.style.display = 'none';
      wrap.appendChild(placeholder);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () { handleImageError(img); });
    });
  });
})();

/**
 * Panko 合规性 Demo 弹窗
 * 点击 Privacy Policy / Cookie Policy / Terms of Service 显示预留位提示
 */
(function () {
  'use strict';

  var modal = document.getElementById('legal-demo-modal');
  var triggers = document.querySelectorAll('[data-legal-demo]');
  var closeBtns = document.querySelectorAll('[data-close-legal-demo]');
  var overlay = modal ? modal.querySelector('.modal-overlay') : null;

  if (!modal) return;

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  triggers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();

/**
 * Panko 社交关注弹窗
 * 点击 Instagram / TikTok 按钮 → 弹出 Coming soon 提示
 */
(function () {
  'use strict';

  var socialModal = document.getElementById('social-modal');
  var triggers = document.querySelectorAll('[data-social-modal]');
  var closeBtns = document.querySelectorAll('[data-close-social-modal]');
  var overlay = socialModal ? socialModal.querySelector('.modal-overlay') : null;

  if (!socialModal) return;

  function openModal() {
    socialModal.classList.add('is-open');
    socialModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    socialModal.classList.remove('is-open');
    socialModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  triggers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && socialModal.classList.contains('is-open')) closeModal();
  });
})();
