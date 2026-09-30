// Cevşen Veritabanı (Örnek Bablar)
const cevsanData = [
  {
    babNumber: 1,
    introTr: "Ey benim ve hadsiz mevcudatın kudret ve azametli Hâlık ve Rezzakı olan Rabb-i Kerimim; senin doksan dokuz esma-i hüsna ve bine baliğ olan sıfat-ı celile ve cemileni ba's-ı rahmet ve vesile-i necat bilerek sen Azîmü'ş-Şan'dan niyaz ediyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "جَوْشَنُ الْكَبِيرِ",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu isimlerinin hakkı için Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اَللّٰهُ", reading: "Yâ Allâh", meaning: "Ey her şeyin gerçek mâbûdu olan Allah" },
      { id: 2, arabic: "يَا رَحْمٰنُ", reading: "Yâ Rahmân", meaning: "Ey dünyada yarattıklarının hepsine merhamet eden" },
      { id: 3, arabic: "يَا رَحِيمُ", reading: "Yâ Rahîm", meaning: "Ey ahirette sadece müminlere nihayetsiz lütufta bulunan" },
      { id: 4, arabic: "يَا عَلِيمُ", reading: "Yâ Alîm", meaning: "Ey her şeyi hakkıyla ve bütün incelikleriyle bilen" },
      { id: 5, arabic: "يَا حَلِيمُ", reading: "Yâ Halîm", meaning: "Ey cezalandırmakta acele etmeyip mühlet tanıyan" },
      { id: 6, arabic: "يَا عَظِيمُ", reading: "Yâ Azîm", meaning: "Ey sonsuz büyüklük ve azamet sahibi" },
      { id: 7, arabic: "يَا حَكِيمُ", reading: "Yâ Hakîm", meaning: "Ey her işi hikmetli ve faydalı olan" },
      { id: 8, arabic: "يَا قَدِيمُ", reading: "Yâ Kadîm", meaning: "Ey varlığının başlangıcı olmayan ezeli Zat" },
      { id: 9, arabic: "يَا مُقِيمُ", reading: "Yâ Mukîm", meaning: "Ey bütün varlığı ayakta tutan ve devam ettiren" },
      { id: 10, arabic: "يَا كَرِيمُ", reading: "Yâ Kerîm", meaning: "Ey lütuf ve ihsanı bol, keremi nihayetsiz olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 2,
    introTr: "Ey mülkün yegâne mâliki ve izzet sahibi Rabbim! Her türlü noksanlıktan münezzeh kemâl sıfatlarınla Senden emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّانِي",
    openingArabic: "يَا سَيِّدَ السَّادَاتِ",
    openingTr: "Ey efendilerin Efendisi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا سَيِّدَ السَّادَاتِ", reading: "Yâ Seyyide's-sâdât", meaning: "Ey efendilerin Efendisi ve bütün seyyidlerin Rabbi" },
      { id: 2, arabic: "يَا مُجِيبَ الدَّعَوَاتِ", reading: "Yâ Mûcîbe'd-da'avât", meaning: "Ey bütün içten dualara icabet edip kabul buyuran" },
      { id: 3, arabic: "يَا رَافِعَ الدَّرَجَاتِ", reading: "Yâ Râfia'd-deracât", meaning: "Ey şan ve dereceleri yükselten" },
      { id: 4, arabic: "يَا وَلِيَّ الْحَسَنَاتِ", reading: "Yâ Veliyye'l-hasenât", meaning: "Ey bütün iyilik ve güzelliklerin gerçek sahibi" },
      { id: 5, arabic: "يَا غَافِرَ الْخَط۪يٓئَاتِ", reading: "Yâ Gâfire'l-hatî'ât", meaning: "Ey günah ve kusurları bağışlayan afüvv Zat" },
      { id: 6, arabic: "يَا مُعْطِيَ الْمَسْئَلَاتِ", reading: "Yâ Mu'tiye'l-mes'elât", meaning: "Ey kulların istediği her meşru dileği ihsan eden" },
      { id: 7, arabic: "يَا قَابِلَ التَّوْبَاتِ", reading: "Yâ Kâbile't-tevbât", meaning: "Ey samimi tevbeleri kabul eden" },
      { id: 8, arabic: "يَا سَامِعَ الْاَصْوَاتِ", reading: "Yâ Sâmia'l-asvât", meaning: "Ey gizli açık bütün yakarışları ve sesleri işiten" },
      { id: 9, arabic: "يَا عَالِمَ الْخَفِيَّاتِ", reading: "Yâ Âlime'l-hafiyyât", meaning: "Ey kalplerin en gizli sırlarını eksiksiz bilen" },
      { id: 10, arabic: "يَا دَافِعَ الْبَلِيَّاتِ", reading: "Yâ Dâfia'l-beliyyât", meaning: "Ey her türlü belâ ve musibeti defeden" }
    ],
    "refrainArabic": "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    "refrainTr": "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 3,
    introTr: "Ey kerem ve lütfu sonsuz olan Mevlâm! İzzet ve celâline sığınarak Sana yalvarıyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّالِثُ",
    openingArabic: "يَا خَيْرَ الْغَافِرِينَ",
    openingTr: "Ey bağışlayanların en hayırlısı:",
    items: [
      { id: 1, arabic: "يَا خَيْرَ الْغَافِرِينَ", reading: "Yâ Hayra'l-gâfirîn", meaning: "Ey bağışlayıcıların en hayırlısı" },
      { id: 2, arabic: "يَا خَيْرَ الْفَاتِحِينَ", reading: "Yâ Hayra'l-fâtihîn", meaning: "Ey hayır ve bereket kapılarını en güzel açan" },
      { id: 3, arabic: "يَا خَيْرَ النَّاصِرِينَ", reading: "Yâ Hayra'n-nâsırîn", meaning: "Ey yardım edenlerin en hayırlısı ve en güçlüsü" },
      { id: 4, arabic: "يَا خَيْرَ الْحَاكِمِينَ", reading: "Yâ Hayra'l-hâkimîn", meaning: "Ey hüküm verenlerin en adili" },
      { id: 5, arabic: "يَا خَيْرَ الرَّازِقِينَ", reading: "Yâ Hayra'r-râzikîn", meaning: "Ey bütün mahlukatı en güzel rızıklandıran" },
      { id: 6, arabic: "يَا خَيْرَ الْوَارِثِينَ", reading: "Yâ Hayra'l-vârisîn", meaning: "Ey her şey yok olduktan sonra baki kalan en hayırlı varis" },
      { id: 7, arabic: "يَا خَيْرَ الْحَامِدِينَ", reading: "Yâ Hayra'l-hâmidîn", meaning: "Ey övgüye en lâyık olan ve hamdedenlerin en hayırlısı" },
      { id: 8, arabic: "يَا خَيْرَ الذَّاكِرِينَ", reading: "Yâ Hayra'z-zâkirîn", meaning: "Ey Kendisini anan kullarını rahmetiyle ananların en hayırlısı" },
      { id: 9, arabic: "يَا خَيْرَ الْمُنْزِلِينَ", reading: "Yâ Hayra'l-münzilîn", meaning: "Ey lütuf ve ikramını en hayırlı şekilde indiren" },
      { id: 10, arabic: "يَا خَيْرَ الْمُحْسِنِينَ", reading: "Yâ Hayra'l-muhsinîn", meaning: "Ey sonsuz ihsan ve kerem sahiplerinin en hayırlısı" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 4,
    introTr: "Ey izzet ve celâl sahibi Rabbim! Kudret ve azametine sığınarak Senden niyaz ediyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الرَّابِعُ",
    openingArabic: "يَا مَنْ لَهُ الْعِزَّةُ وَالْجَمَالُ",
    openingTr: "Ey mutlak izzet ve cemal sahibi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا مَنْ لَهُ الْعِزَّةُ وَالْجَمَالُ", reading: "Yâ Men lehu'l-izzetu ve'l-cemâl", meaning: "Ey gerçek izzet, yücelik ve cemal sahibi olan" },
      { id: 2, arabic: "يَا مَنْ لَهُ الْمُلْكُ وَالْجَلَالُ", reading: "Yâ Men lehu'l-mülkü ve'l-celâl", meaning: "Ey mülkün yegâne mâliki ve celâl sahibi olan" },
      { id: 3, arabic: "يَا مَنْ لَهُ الْقُدْرَةُ وَالْكَمَالُ", reading: "Yâ Men lehu'l-kudretu ve'l-kemâl", meaning: "Ey nihayetsiz kudret ve kusursuz kemâl sahibi" },
      { id: 4, arabic: "يَا مَنْ هُوَ الْكَبِيرُ الْمُتَعَالِ", reading: "Yâ Men hüve'l-kebîru'l-müteâl", meaning: "Ey sonsuz büyük ve her şeyden pek yüce olan" },
      { id: 5, arabic: "يَا مُنْشِئَ السَّحَابِ الثِّقَالِ", reading: "Yâ Münşie's-sehâbi's-sikâl", meaning: "Ey rahmet yüklü ağır bulutları yaratan ve sevk eden" },
      { id: 6, arabic: "يَا مَنْ هُوَ شَدِيدُ الْمِحَالِ", reading: "Yâ Men hüve şedîdü'l-mihâl", meaning: "Ey kudret ve azameti karşısında hiçbir şeyin duramadığı" },
      { id: 7, arabic: "يَا مَنْ هُوَ سَرِيعُ الْحِسَابِ", reading: "Yâ Men hüve serîu'l-hisâb", meaning: "Ey hesabı pek çabuk ve eksiksiz gören" },
      { id: 8, arabic: "يَا مَنْ هُوَ شَدِيدُ الْعِقَابِ", reading: "Yâ Men hüve şedîdü'l-ıkâb", meaning: "Ey azabı ve cezası çetin olan" },
      { id: 9, arabic: "يَا مَنْ عِنْدَهُ حُسْنُ الثَّوَابِ", reading: "Yâ Men indehû husnü's-sevâb", meaning: "Ey en güzel mükâfat ve sevap katında bulunan" },
      { id: 10, arabic: "يَا مَنْ عِنْدَهُٓ اُمُّ الْكِتَابِ", reading: "Yâ Men indehû ümmü'l-kitâb", meaning: "Ey ana kitap olan Levh-i Mahfuz katında olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 5,
    introTr: "Ey rahmeti her şeyi kuşatan Rahim Mevlâm! İsimlerinin hakkı için Senden niyaz ediyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الْخَامِسُ",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاسْمِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin tecellileriyle Senden istiyorum:",
    items: [
      { id: 1, arabic: "يَا حَنَّانُ", reading: "Yâ Hannân", meaning: "Ey çok merhametli ve kullarına pek şefkatli olan" },
      { id: 2, arabic: "يَا مَنَّانُ", reading: "Yâ Mennân", meaning: "Ey nimet ve ihsanı bol, karşılıksız veren" },
      { id: 3, arabic: "يَا دَيَّانُ", reading: "Yâ Deyyân", meaning: "Ey herkesin amelinin karşılığını tam olarak veren" },
      { id: 4, arabic: "يَا غُفْرَانُ", reading: "Yâ Gufrân", meaning: "Ey mağfireti ve bağışlaması sınırsız olan" },
      { id: 5, arabic: "يَا بُرْهَانُ", reading: "Yâ Bürhân", meaning: "Ey varlığına kâinattaki her şey kesin delil olan" },
      { id: 6, arabic: "يَا سُلْطَانُ", reading: "Yâ Sultân", meaning: "Ey saltanatı daimi ve ebedi olan yegâne Hükümran" },
      { id: 7, arabic: "يَا سُبْحَانُ", reading: "Yâ Sübhân", meaning: "Ey her türlü eksiklik ve kusurdan pak ve münezzeh olan" },
      { id: 8, arabic: "يَا مُسْتَعَانُ", reading: "Yâ Müsteân", meaning: "Ey her ihtiyaç anında Kendisinden yardım dilenen" },
      { id: 9, arabic: "يَا ذَا الْمَنِّ وَالْبَيَانِ", reading: "Yâ Ze'l-menni ve'l-beyân", meaning: "Ey sonsuz lütuf ve hakikatleri açıklama sahibi" },
      { id: 10, arabic: "يَا ذَا الْاَمَانِ", reading: "Yâ Ze'l-emân", meaning: "Ey korkulardan koruyan ve güven veren emân Sahibi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 6,
    introTr: "Ey azameti karşısında bütün mevcudatın boyun eğdiği Celil Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ السَّادِسُ",
    openingArabic: "يَا مَنْ تَوَاضَعَ كُلُّ شَيْءٍ لِعَظَمَتِهِ",
    openingTr: "Ey azameti karşısında her şeyin tevazu ile boyun büktüğü Rabbim:",
    items: [
      { id: 1, arabic: "يَا مَنْ تَوَاضَعَ كُلُّ شَيْءٍ لِعَظَمَتِهِ", reading: "Yâ men tevâdaa küllü şey'in liaazametih", meaning: "Ey büyüklüğü karşısında her varlığın tevazu gösterdiği" },
      { id: 2, arabic: "يَا مَنِ اسْتَسْلَمَ كُلُّ شَيْءٍ لِقُدْرَتِهِ", reading: "Yâ meni'stesleme küllü şey'in likudretih", meaning: "Ey kudreti karşısında bütün kainatın teslim olduğu" },
      { id: 3, arabic: "يَا مَنْ ذَلَّ كُلُّ شَيْءٍ لِعِزَّتِهِ", reading: "Yâ men zelle küllü şey'in liizzetih", meaning: "Ey yüce izzeti karşısında her şeyin boyun eğdiği" },
      { id: 4, arabic: "يَا مَنْ خَضَعَ كُلُّ شَيْءٍ لِهَيْبَتِهِ", reading: "Yâ men hadaa küllü şey'in liheybetih", meaning: "Ey celal ve heybeti karşısında her şeyin huşû duyduğu" },
      { id: 5, arabic: "يَا مَنِ انْقَادَ كُلُّ شَيْءٍ مِنْ خَشْيَتِهِ", reading: "Yâ meni'nkâde küllü şey'in min haşyetih", meaning: "Ey korku ve haşyetiyle her şeyin emrine itaat ettiği" },
      { id: 6, arabic: "يَا مَنْ تَشَقَّقَتِ الْجِبَالُ مِنْ مَخَافَتِهِ", reading: "Yâ men teşakkakati'l-cibâlü min mehâfetih", meaning: "Ey korkusundan ulu dağların parçalanıp yarıldığı" },
      { id: 7, arabic: "يَا مَنْ قَامَتِ السَّمٰوَاتُ بِاَمْرِهِ", reading: "Yâ men kâmeti's-semâvâtu biemrih", meaning: "Ey göklerin ancak O'nun emriyle ayakta durduğu" },
      { id: 8, arabic: "يَا مَنِ اسْتَقَرَّتِ الْاَرَضُونَ بِاِذْنِهِ", reading: "Yâ meni'stekarrati'l-aradûne biiznih", meaning: "Ey yeryüzünün sadece O'nun izniyle kararlaştığı" },
      { id: 9, arabic: "يَا مَنْ يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ", reading: "Yâ men yüsebbihu'r-ra'dü bihamdih", meaning: "Ey gök gürültüsünün hamd ile Kendisini tesbih ettiği" },
      { id: 10, arabic: "يَا مَنْ لَا يَعْتَد۪ي عَلٰى اَهْلِ مَمْلَكَتِهِ", reading: "Yâ men lâ ya'tedî alâ ehli memleketih", meaning: "Ey mülkünün ahalisine ve kullarına asla zulmetmeyen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 7,
    introTr: "Ey tövbeleri kabul buyuran ve kullarının hatalarını affeden Gafur Mevlâm;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ السَّابِعُ",
    openingArabic: "يَا غَافِرَ الْخَطَايَا",
    openingTr: "Ey günahları bağışlayan ve hataları örten Allah'ım:",
    items: [
      { id: 1, arabic: "يَا غَافِرَ الْخَطَايَا", reading: "Yâ Gâfire'l-hatâyâ", meaning: "Ey yapılan hataları ve günahları bağışlayan" },
      { id: 2, arabic: "يَا كَاشِفَ الْبَلَايَا", reading: "Yâ Kâşife'l-belâyâ", meaning: "Ey dert ve musibetleri ortadan kaldıran" },
      { id: 3, arabic: "يَا مُنْتَهَى الرَّجَايَا", reading: "Yâ Müntehe'r-racâyâ", meaning: "Ey ümit ve arzuların nihai ve en yüce merci" },
      { id: 4, arabic: "يَا مُجْزِلَ الْعَطَايَا", reading: "Yâ Müczile'l-atâyâ", meaning: "Ey bol bol ve hesapsız bağışlarda bulunan" },
      { id: 5, arabic: "يَا وَاهِبَ الْهَدَايَا", reading: "Yâ Vâhibe'l-hedâyâ", meaning: "Ey kullarına çeşit çeşit hediyeler lütfeden" },
      { id: 6, arabic: "يَا رَازِقَ الْبَرَايَا", reading: "Yâ Râzika'l-berâyâ", meaning: "Ey bütün yaratılmışların rızkını eksiksiz veren" },
      { id: 7, arabic: "يَا قَاضِيَ الْمَنَايَا", reading: "Yâ Kâdiye'l-menâyâ", meaning: "Ey ecelleri takdir ve infaz eden" },
      { id: 8, arabic: "يَا سَامِعَ الشَّكَايَا", reading: "Yâ Sâmia'ş-şekâyâ", meaning: "Ey gizli dert ve şikayetleri işiten" },
      { id: 9, arabic: "يَا بَاعِثَ السَّرَايَا", reading: "Yâ Bâise's-serâyâ", meaning: "Ey orduları sevk eden ve kullarını yönlendiren" },
      { id: 10, arabic: "يَا مُطْلِقَ الْاُسَارَى", reading: "Yâ Mutlika'l-üsârâ", meaning: "Ey esirleri ve sıkıntıya düşenleri kurtaran" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 8,
    introTr: "Ey hamd ve sena ancak Kendisine layık olan Vacibü'l-Vücud Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّامِنُ",
    openingArabic: "يَا ذَا الْحَمْدِ وَالثَّنَاءِ",
    openingTr: "Ey mutlak övgü ve senanın tek sahibi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا ذَا الْحَمْدِ وَالثَّنَاءِ", reading: "Yâ Ze'l-hamdi ve's-senâ'", meaning: "Ey bütün hamd ve senalara layık olan" },
      { id: 2, arabic: "يَا ذَا الْفَخْرِ وَالْبَهَاءِ", reading: "Yâ Ze'l-fahri ve'l-behâ'", meaning: "Ey sonsuz şan, şeref ve parlak güzellik sahibi" },
      { id: 3, arabic: "يَا ذَا الْمَجْدِ وَالسَّنَاءِ", reading: "Yâ Ze'l-mecdi ve's-senâ'", meaning: "Ey yücelik ve üstün şeref sahibi" },
      { id: 4, arabic: "يَا ذَا الْعَهْدِ وَالْوَفَاءِ", reading: "Yâ Ze'l-ahdi ve'l-vefâ'", meaning: "Ey ahdine ve vaadine sadık olan vefalı Zat" },
      { id: 5, arabic: "يَا ذَا الْعَفْوِ وَالرِّضَاءِ", reading: "Yâ Ze'l-afvi ve'r-ridâ'", meaning: "Ey affı sonsuz ve rızası her şeyden kıymetli olan" },
      { id: 6, arabic: "يَا ذَا الْمَنِّ وَالْعَطَاءِ", reading: "Yâ Ze'l-menni ve'l-atâ'", meaning: "Ey hesapsız lütuf ve ihsan sahibi" },
      { id: 7, arabic: "يَا ذَا الْفَصْلِ وَالْقَضَاءِ", reading: "Yâ Ze'l-fasli ve'l-kadâ'", meaning: "Ey hak ile batılı ayıran ve adil hüküm veren" },
      { id: 8, arabic: "يَا ذَا الْعِزِّ وَالْبَقَاءِ", reading: "Yâ Ze'l-ızzi ve'l-bekâ'", meaning: "Ey mutlak izzet ve sonsuz beka sahibi" },
      { id: 9, arabic: "يَا ذَا الْجُودِ وَالسَّخَاءِ", reading: "Yâ Ze'l-cûdi ve's-sehâ'", meaning: "Ey cömertlik ve keremi nihayetsiz olan" },
      { id: 10, arabic: "يَا ذَا الْاٰلَاءِ وَالنَّعْمَاءِ", reading: "Yâ Ze'l-âlâi ve'n-na'mâ'", meaning: "Ey hadsiz nimet ve ihsanlar bahşeden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 9,
    introTr: "Ey dilediğini var eden, dilediğini yücelten Kadir-i Zülcelal;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ التَّاسِعُ",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin tecellileri hürmetine Senden istiyorum:",
    items: [
      { id: 1, arabic: "يَا مَانِعُ", reading: "Yâ Mâni'", meaning: "Ey kötülüklere ve zararlara mani olan" },
      { id: 2, arabic: "يَا دَافِعُ", reading: "Yâ Dâfi'", meaning: "Ey belaları ve musibetleri defeden" },
      { id: 3, arabic: "يَا نَافِعُ", reading: "Yâ Nâfi'", meaning: "Ey kullarına fayda ve hayır veren şeyleri yaratan" },
      { id: 4, arabic: "يَا سَامِعُ", reading: "Yâ Sâmi'", meaning: "Ey bütün sesleri ve fısıltıları eksiksiz işiten" },
      { id: 5, arabic: "يَا رَافِعُ", reading: "Yâ Râfi'", meaning: "Ey dostlarının mertebelerini yükselten" },
      { id: 6, arabic: "يَا صَانِعُ", reading: "Yâ Sâni'", meaning: "Ey her şeyi mükemmel ve sanatlı yaratan Sanatkar" },
      { id: 7, arabic: "يَا شَافِعُ", reading: "Yâ Şâfi'", meaning: "Ey şefaat edenlere şefaat izni bahşeden" },
      { id: 8, arabic: "يَا وَاسِعُ", reading: "Yâ Vâsi'", meaning: "Ey ilmi, rahmeti ve kudreti her şeyi kuşatan" },
      { id: 9, arabic: "يَا مُوسِعُ", reading: "Yâ Mûsi'", meaning: "Ey dilediğinin rızkını ve imkanını genişleten" },
      { id: 10, arabic: "يَا مُنْشِئُ", reading: "Yâ Münşi'", meaning: "Ey yoktan var eden ve inşa buyuran" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 10,
    introTr: "Ey her sanatında kudret ve hikmeti parlayan Sâni-i Zülcelal;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الْعَاشِرُ",
    openingArabic: "يَا صَانِعَ كُلِّ مَصْنُوعٍ",
    openingTr: "Ey her yaratılmışın hakiki Sanatkârı olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا صَانِعَ كُلِّ مَصْنُوعٍ", reading: "Yâ Sânia külli masnû'", meaning: "Ey yaratılmış bütün sanatların yegâne Yaratıcısı" },
      { id: 2, arabic: "يَا خَالِقَ كُلِّ مَخْلُوقٍ", reading: "Yâ Hâlika külli mahlûk", meaning: "Ey bütün mahlukatı var eden Hâlık" },
      { id: 3, arabic: "يَا رَازِقَ كُلِّ مَرْزُوقٍ", reading: "Yâ Râzika külli merzûk", meaning: "Ey rızık verilen her canlının gerçek Rezzakı" },
      { id: 4, arabic: "يَا مَالِكَ كُلِّ مَمْلُوكٍ", reading: "Yâ Mâlike külli memlûk", meaning: "Ey bütün mülk ve sahiplerinin gerçek Mâliki" },
      { id: 5, arabic: "يَا كَاشِفَ كُلِّ مَكْرُوبٍ", reading: "Yâ Kâşife külli mekrûb", meaning: "Ey sıkıntıya ve kedere düşenlerin ferahlatıcısı" },
      { id: 6, arabic: "يَا فَارِجَ كُلِّ مَهْمُومٍ", reading: "Yâ Fârice külli mehmûm", meaning: "Ey dertlilerin derdine derman olan" },
      { id: 7, arabic: "يَا رَاحِمَ كُلِّ مَرْحُومٍ", reading: "Yâ Râhime külli merhûm", meaning: "Ey merhamet edilenlerin hepsine acıyan Rahim" },
      { id: 8, arabic: "يَا نَاصِرَ كُلِّ مَخْذُولٍ", reading: "Yâ Nâsıra külli mahzûl", meaning: "Ey çaresiz ve yalnız kalanların gerçek Yardımcısı" },
      { id: 9, arabic: "يَا سَاتِرَ كُلِّ مَعْيُوبٍ", reading: "Yâ Sâtira külli ma'yûb", meaning: "Ey ayıp ve kusurları örten Settar" },
      { id: 10, arabic: "يَا مَلْجَاَ كُلِّ مَطْرُودٍ", reading: "Yâ Melcee külli matrûd", meaning: "Ey her kovulmuş ve çaresiz kulun sığınağı" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  }
];

// Durum Yönetimi
let currentBabIndex = 0;
let currentReciter = "İsmail Biçer";
let recitationMode = "alternate"; // 'alternate': 1 Bab Arapça, 1 Bab Türkçe! ('ar', 'tr', 'both')
let isPlaying = false;
let playbackTimer = null;
let currentHighlightId = null;
let autoTurnPage = true; // Sayfa otomatik çevrilsin mi?

// DOM Elemanları
const coverView = document.getElementById("coverView");
const readingView = document.getElementById("readingView");
const openBookBtn = document.getElementById("openBookBtn");
const backToCoverBtn = document.getElementById("backToCoverBtn");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const switchReciterBtn = document.getElementById("switchReciterBtn");
const voiceModal = document.getElementById("voiceModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const applyVoiceBtn = document.getElementById("applyVoiceBtn");

const currentReciterName = document.getElementById("currentReciterName");
const activeReciterLabel = document.getElementById("activeReciterLabel");
const currentBabTitle = document.getElementById("currentBabTitle");
const leftBabBadge = document.getElementById("leftBabBadge");
const rightBabBadge = document.getElementById("rightBabBadge");
const introText = document.getElementById("introText");
const translationList = document.getElementById("translationList");
const refrainTrText = document.getElementById("refrainTrText");
const arabicOpeningText = document.getElementById("arabicOpeningText");
const arabicNamesList = document.getElementById("arabicNamesList");
const refrainArText = document.getElementById("refrainArText");

const prevBabBtn = document.getElementById("prevBabBtn");
const nextBabBtn = document.getElementById("nextBabBtn");
const playAudioBtn = document.getElementById("playAudioBtn");
const playIcon = document.getElementById("playIcon");
const playText = document.getElementById("playText");
const highlightIndexLabel = document.getElementById("highlightIndexLabel");

// Web Audio / TTS Ses Motoru Kilidini Açma (Android WebView & Mobil Tarayıcılar İçin)
function unlockAudio() {
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.resume();
      if (!window.speechSynthesis.speaking) {
        // Sessiz boş utterance ile Android WebView TTS motorunu ısıt
        const dummyUtterance = new SpeechSynthesisUtterance("");
        dummyUtterance.volume = 0;
        window.speechSynthesis.speak(dummyUtterance);
      }
    } catch (e) {}
  }
}
document.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
document.addEventListener("click", unlockAudio, { once: true, passive: true });

// Olay Dinleyicileri
openBookBtn.addEventListener("click", () => {
  unlockAudio();
  coverView.classList.remove("active");
  readingView.classList.add("active");
  renderBab(currentBabIndex);
});

backToCoverBtn.addEventListener("click", () => {
  stopPlayback();
  readingView.classList.remove("active");
  coverView.classList.add("active");
});

// Modal Aç/Kapa
function openModal() {
  voiceModal.classList.add("active");
}

function closeModal() {
  voiceModal.classList.remove("active");
}

const cancelModalBtn = document.getElementById("cancelModalBtn");

openSettingsBtn.addEventListener("click", openModal);
switchReciterBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

// Dışarıya (karartmaya) tıklayınca da modalı kapat
voiceModal.addEventListener("click", (e) => {
  if (e.target === voiceModal) {
    closeModal();
  }
});

// Okuma Modu Butonları
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    recitationMode = btn.getAttribute("data-mode");
  });
});

// Modal Seçenekleri
document.querySelectorAll(".reciter-option").forEach((opt) => {
  opt.addEventListener("click", () => {
    document.querySelectorAll(".reciter-option").forEach(o => o.classList.remove("selected"));
    opt.classList.add("selected");
    const radio = opt.querySelector("input[type=radio]");
    radio.checked = true;

    // Otomatik mod eşleme
    const val = radio.value;
    if (val.includes("Hayri Küçükdeniz") || val.includes("Türkçe Meal")) {
      setModeButton("tr");
    } else if (val.includes("Birlikte")) {
      setModeButton("both");
    } else {
      setModeButton("ar");
    }
  });
});

function setModeButton(mode) {
  recitationMode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => {
    if (b.getAttribute("data-mode") === mode) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

applyVoiceBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector("input[name=reciter]:checked");
  if (selectedRadio) {
    currentReciter = selectedRadio.value;
    if (currentReciterName) {
      currentReciterName.textContent = currentReciter;
    }
    if (activeReciterLabel) {
      activeReciterLabel.textContent = `${currentReciter} (${recitationMode.toUpperCase()})`;
    }
  }
  closeModal();
});

// Otomatik Çevir Checkbox Dinleyicisi
const autoTurnCheckbox = document.getElementById("autoTurnCheckbox");
if (autoTurnCheckbox) {
  autoTurnCheckbox.addEventListener("change", (e) => {
    autoTurnPage = e.target.checked;
  });
}

// Sayfa Render & 3D Çevirme Efekti
function renderBab(index, direction = 'next') {
  const bookSpread = document.querySelector(".book-spread");
  if (bookSpread) {
    bookSpread.classList.remove("turning-next", "turning-prev");
    void bookSpread.offsetWidth; // Reflow tetikle
    bookSpread.classList.add(direction === 'next' ? "turning-next" : "turning-prev");
    setTimeout(() => {
      bookSpread.classList.remove("turning-next", "turning-prev");
    }, 700);
  }

  const bab = cevsanData[index];
  currentBabTitle.textContent = `Bab ${bab.babNumber}`;
  leftBabBadge.textContent = `#${bab.babNumber}`;
  rightBabBadge.textContent = `#${bab.babNumber}`;
  introText.textContent = bab.introTr;
  refrainTrText.textContent = bab.refrainTr;
  arabicOpeningText.textContent = bab.openingArabic;
  refrainArText.textContent = bab.refrainArabic;

  const pageCounterBadge = document.getElementById("pageCounterBadge");
  if (pageCounterBadge) {
    pageCounterBadge.textContent = `${bab.babNumber} / ${cevsanData.length}`;
  }

  const leftPageNum = document.getElementById("leftPageNum");
  const rightPageNum = document.getElementById("rightPageNum");
  if (leftPageNum && rightPageNum) {
    leftPageNum.textContent = 100 + (index * 2);
    rightPageNum.textContent = 101 + (index * 2);
  }

  // Çeviriler Listesi (Tam Karşılıklı Eşleşen Kutu)
  translationList.innerHTML = bab.items.map(item => `
    <div class="trans-item" id="trans-item-${item.id}">
      <span class="item-id">${item.id}.</span>
      <div class="item-content">
        <span class="item-reading">${item.reading}</span>
        <div class="item-meaning">${item.meaning}</div>
      </div>
    </div>
  `).join("");

  // Arapça İsimler Listesi (Ortalı)
  arabicNamesList.innerHTML = bab.items.map(item => `
    <div class="arabic-item" id="ar-item-${item.id}">
      <span class="arabic-star">✦</span>
      <span class="arabic-text">${item.arabic}</span>
      <span class="arabic-star">✦</span>
    </div>
  `).join("");

  // Nav butonları kontrol
  prevBabBtn.disabled = (index === 0);
  nextBabBtn.disabled = (index === cevsanData.length - 1);
  highlightIndexLabel.textContent = "Hazır";
}

prevBabBtn.addEventListener("click", () => {
  if (currentBabIndex > 0) {
    stopPlayback();
    currentBabIndex--;
    renderBab(currentBabIndex, 'prev');
  }
});

nextBabBtn.addEventListener("click", () => {
  if (currentBabIndex < cevsanData.length - 1) {
    stopPlayback();
    currentBabIndex++;
    renderBab(currentBabIndex, 'next');
  }
});

// Seslendirme & Canlı Takip
playAudioBtn.addEventListener("click", () => {
  unlockAudio();
  if (isPlaying) {
    stopPlayback();
  } else {
    startPlayback();
  }
});

// Mobil Görünüm Sekmeleri (Karşılıklı / Sadece Arapça / Sadece Meal)
let currentMobileView = 'both';
const mobileTabs = document.querySelectorAll(".mobile-view-tabs .tab-btn");
mobileTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    mobileTabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMobileView = btn.getAttribute("data-view");
    applyMobileViewLayout();
  });
});

function applyMobileViewLayout() {
  const leftPage = document.querySelector(".page-left");
  const rightPage = document.querySelector(".page-right");
  if (!leftPage || !rightPage) return;

  if (window.innerWidth <= 850) {
    if (currentMobileView === 'ar') {
      leftPage.style.display = 'none';
      rightPage.style.display = 'block';
    } else if (currentMobileView === 'tr') {
      leftPage.style.display = 'block';
      rightPage.style.display = 'none';
    } else {
      leftPage.style.display = 'block';
      rightPage.style.display = 'block';
    }
  } else {
    leftPage.style.display = 'block';
    rightPage.style.display = 'block';
  }
}
window.addEventListener("resize", applyMobileViewLayout);

// Sabit ve Sarsıntısız Vurgulama (Aşağı yukarı zıplamayı tamamen önler)
function highlightItem(id) {
  document.querySelectorAll(".trans-item.active, .arabic-item.active").forEach(el => {
    el.classList.remove("active");
  });

  if (id === null) return;

  const transEl = document.getElementById(`trans-item-${id}`);
  const arEl = document.getElementById(`ar-item-${id}`);

  if (transEl) transEl.classList.add("active");
  if (arEl) arEl.classList.add("active");

  // Yalnızca mobil ekranda ve içerik ekran dışındaysa yumuşak dikey kaydırma
  if (window.innerWidth <= 850) {
    const targetEl = (currentMobileView === 'ar' && arEl) ? arEl : (transEl || arEl);
    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      if (rect.top < 70 || rect.bottom > window.innerHeight - 80) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }
}

// Sistemdeki Sesleri Listeleme ve En Uygun Sesi Seçme
let availableVoices = [];
function loadVoices() {
  if ('speechSynthesis' in window) {
    try {
      availableVoices = window.speechSynthesis.getVoices();
    } catch (e) {}
  }
}
loadVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Ses Sentezleme & Web Audio Çan Tonu Destekli Oynatıcı
let audioCtx = null;
function playHarmonicTone(freq = 440, duration = 0.25) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

// İnternetten Doğal Ses Oynatıcı (Google TTS Audio Stream)
let currentOnlineAudio = null;

function playOnlineAudio(text, lang = 'ar') {
  return new Promise((resolve) => {
    let resolved = false;
    const finish = () => {
      if (!resolved) {
        resolved = true;
        if (currentOnlineAudio) {
          currentOnlineAudio.onended = null;
          currentOnlineAudio.onerror = null;
        }
        resolve();
      }
    };

    try {
      if (currentOnlineAudio) {
        currentOnlineAudio.pause();
        currentOnlineAudio.src = "";
      }

      // Metni temizle ve online TTS için hazırla
      const cleanText = text.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim();
      const targetLang = lang.startsWith('ar') ? 'ar' : 'tr';
      // Google TTS endpoint (İnternetten yüksek kaliteli ve doğal ses)
      const encodedText = encodeURIComponent(cleanText.substring(0, 160));
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${targetLang}&q=${encodedText}`;

      const audio = new Audio();
      currentOnlineAudio = audio;
      audio.crossOrigin = "anonymous";
      audio.preload = "auto";
      audio.src = audioUrl;

      audio.onended = finish;
      audio.onerror = () => {
        // İnternet veya bağlantı sorunu olursa Promise takılmasın, sonrakine geçsin
        finish();
      };

      // Güvenlik zaman aşımı: Ağ yavaşsa veya ses takılırsa akış durmasın
      const estimatedSec = Math.max(2000, cleanText.length * 90);
      const timeoutTimer = setTimeout(finish, estimatedSec + 3000);

      const originalFinish = finish;
      const wrappedFinish = () => {
        clearTimeout(timeoutTimer);
        originalFinish();
      };
      audio.onended = wrappedFinish;
      audio.onerror = wrappedFinish;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Otomatik oynatma veya ağ engeline takılırsa bitir
          finish();
        });
      }
    } catch (e) {
      finish();
    }
  });
}

// Android Yerel Callback Dinleyicisi
let currentUtteranceCallback = null;
window.onAndroidTTSFinished = function(utteranceId) {
  if (currentUtteranceCallback) {
    const cb = currentUtteranceCallback;
    currentUtteranceCallback = null;
    cb();
  }
};

function speakText(text, lang = 'tr-TR', rate = 0.95) {
  return new Promise(async (resolve) => {
    let resolved = false;
    const safeResolve = () => {
      if (!resolved) {
        resolved = true;
        currentUtteranceCallback = null;
        resolve();
      }
    };

    const cleanText = text.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim();
    const uId = "utt_" + Date.now();
    currentUtteranceCallback = safeResolve;

    // 1. Android Yerel Köprü (Android MediaPlayer ile İnternetten Canlı Ses)
    if (window.AndroidTTS && typeof window.AndroidTTS.playOnline === 'function') {
      try {
        window.AndroidTTS.playOnline(cleanText, lang, uId);
        // Zaman aşımı sigortası
        const maxWait = Math.max(2500, cleanText.length * 130);
        setTimeout(safeResolve, maxWait);
        return;
      } catch (e) {}
    }

    // 2. HTML5 Web Audio / Audio Element ile İnternetten Oynatma
    try {
      await playOnlineAudio(cleanText, lang);
      safeResolve();
      return;
    } catch (e) {}

    // 3. Çevrimdışı Android TTS Sentezleyici
    if (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function') {
      try {
        window.AndroidTTS.speak(cleanText, lang, uId);
        const maxWait = Math.max(2000, cleanText.length * 100);
        setTimeout(safeResolve, maxWait);
        return;
      } catch (e) {}
    }

    // 4. Web Speech Synthesis Kullan
    if (!('speechSynthesis' in window)) {
      playHarmonicTone(lang.startsWith('ar') ? 520 : 440, 0.35);
      setTimeout(safeResolve, Math.max(1000, cleanText.length * 60));
      return;
    }

    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      if (availableVoices.length === 0) {
        loadVoices();
      }

      if (availableVoices.length > 0) {
        if (lang.startsWith('tr')) {
          const trVoice = availableVoices.find(v => (v.lang && (v.lang.startsWith('tr') || v.lang.includes('TR'))));
          if (trVoice) utterance.voice = trVoice;
        } else if (lang.startsWith('ar')) {
          const arVoice = availableVoices.find(v => (v.lang && (v.lang.startsWith('ar') || v.lang.includes('AR'))));
          if (arVoice) utterance.voice = arVoice;
        }
      }

      let hasFinished = false;
      const finish = () => {
        if (!hasFinished) {
          hasFinished = true;
          resolve();
        }
      };

      utterance.onend = finish;
      utterance.onerror = () => {
        playHarmonicTone(lang.startsWith('ar') ? 540 : 460, 0.35);
        setTimeout(finish, Math.max(1200, text.length * 60));
      };

      const fallbackTimeout = setTimeout(() => {
        finish();
      }, Math.max(2500, text.length * 120));

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      playHarmonicTone(440, 0.3);
      setTimeout(resolve, 1500);
    }
  });
}

async function startPlayback() {
  isPlaying = true;
  playBtnState(true);
  const bab = cevsanData[currentBabIndex];

  // Mod hesaplama: 'alternate' seçiliyse çift indeksler (Bab 1, 3, 5...) Arapça, tek indeksler (Bab 2, 4...) Türkçe
  let effectiveMode = recitationMode;
  if (recitationMode === 'alternate') {
    effectiveMode = (currentBabIndex % 2 === 0) ? 'ar' : 'tr';
  }

  // Başlangıç Duası
  if (effectiveMode === 'ar' || effectiveMode === 'both') {
    highlightIndexLabel.textContent = `Bab ${bab.babNumber} • Arapça Tilavet`;
    await speakText(bab.bismillah, 'ar-SA', 0.85);
    if (!isPlaying) return;
    await speakText(bab.openingArabic, 'ar-SA', 0.85);
  } else if (effectiveMode === 'tr') {
    highlightIndexLabel.textContent = `Bab ${bab.babNumber} • Türkçe Meali`;
    await speakText(bab.openingTr, 'tr-TR', 0.95);
  }

  for (let i = 0; i < bab.items.length; i++) {
    if (!isPlaying) break;
    const currentItem = bab.items[i];
    currentHighlightId = currentItem.id;
    highlightItem(currentItem.id);

    if (effectiveMode === 'ar') {
      highlightIndexLabel.textContent = `Arapça: ${currentItem.id} / ${bab.items.length} (${currentItem.reading})`;
      await speakText(currentItem.arabic, 'ar-SA', 0.85);
      await new Promise(r => setTimeout(r, 1200));
    } else if (effectiveMode === 'tr') {
      highlightIndexLabel.textContent = `Türkçe Meal: ${currentItem.id} / ${bab.items.length} - ${currentItem.reading}`;
      await speakText(`${currentItem.reading}. ${currentItem.meaning}`, 'tr-TR', 0.95);
      await new Promise(r => setTimeout(r, 1000));
    } else if (effectiveMode === 'both') {
      highlightIndexLabel.textContent = `Arapça & Meal: ${currentItem.id} / ${bab.items.length} - ${currentItem.reading}`;
      await speakText(currentItem.arabic, 'ar-SA', 0.85);
      if (!isPlaying) break;
      await new Promise(r => setTimeout(r, 500));
      await speakText(currentItem.meaning, 'tr-TR', 0.95);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (isPlaying) {
    // Bab Sonu Nakarat Duası
    highlightIndexLabel.textContent = "Nakarat (El-Emân)";
    highlightItem(null);
    if (effectiveMode === 'tr') {
      await speakText(bab.refrainTr, 'tr-TR', 0.95);
    } else {
      await speakText(bab.refrainArabic, 'ar-SA', 0.85);
      if (effectiveMode === 'both') {
        await new Promise(r => setTimeout(r, 600));
        await speakText(bab.refrainTr, 'tr-TR', 0.95);
      }
    }

    // SAYFA OTOMATİK ÇEVİRME KONTROLÜ (YANA DOĞRU ÇEVİRME)
    if (autoTurnPage && currentBabIndex < cevsanData.length - 1) {
      const nextModeName = (recitationMode === 'alternate') 
        ? ((currentBabIndex + 1) % 2 === 0 ? "Arapça" : "Türkçe") 
        : "";
      highlightIndexLabel.textContent = `Sonraki Bab'a Yana Çevriliyor... ${nextModeName ? '(' + nextModeName + ')' : ''}`;
      await new Promise(r => setTimeout(r, 1500));
      if (!isPlaying) return;
      currentBabIndex++;
      renderBab(currentBabIndex, 'next');
      // Sonraki babın okunmasına kesintisiz devam et
      startPlayback();
    } else {
      stopPlayback();
    }
  }
}

function stopPlayback() {
  isPlaying = false;
  playBtnState(false);
  if (currentOnlineAudio) {
    try {
      currentOnlineAudio.pause();
      currentOnlineAudio.src = "";
    } catch (e) {}
  }
  if (window.AndroidTTS && typeof window.AndroidTTS.stop === 'function') {
    try {
      window.AndroidTTS.stop();
    } catch (e) {}
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
  highlightItem(null);
  highlightIndexLabel.textContent = "Durduruldu";
}

function playBtnState(playing) {
  if (playAudioBtn) {
    if (playing) {
      playAudioBtn.classList.add("playing");
    } else {
      playAudioBtn.classList.remove("playing");
    }
  }
  if (playIcon) playIcon.textContent = playing ? "❚❚" : "▶";
  if (playText) playText.textContent = playing ? "Durdur" : "Seslendir & Takip Et";
  const vDot = document.getElementById("voiceDot");
  if (vDot) {
    if (playing) vDot.classList.add("playing");
    else vDot.classList.remove("playing");
  }
}

// Parmağı Ekranda Yana Kaydırarak Sayfa Çevirme (Touch Swipe - Risale-i Nur Tarzı)
let touchStartX = 0;
let touchStartY = 0;
const touchArea = document.getElementById("readingView") || document.body;

touchArea.addEventListener("touchstart", (e) => {
  if (e.touches && e.touches.length > 0) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

touchArea.addEventListener("touchend", (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Dikey kaydırmadan ziyade belirgin yatay kaydırma yapılmışsa (en az 45px)
  if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
    if (deltaX < 0) {
      // Parmağı sola kaydırdı -> Sonraki sayfaya/baba git
      if (currentBabIndex < cevsanData.length - 1) {
        stopPlayback();
        currentBabIndex++;
        renderBab(currentBabIndex, 'next');
      }
    } else {
      // Parmağı sağa kaydırdı -> Önceki sayfaya/baba git
      if (currentBabIndex > 0) {
        stopPlayback();
        currentBabIndex--;
        renderBab(currentBabIndex, 'prev');
      }
    }
  }
}, { passive: true });

// Başlangıç render
renderBab(currentBabIndex);
