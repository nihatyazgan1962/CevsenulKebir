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
    openingArabic: "",
    openingTr: "",
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
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
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
  },
  {
    babNumber: 11,
    introTr: "Ey darlıkta ve ferahlıkta kulunun yegâne sığınağı olan Mevlâm;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الْحَادِيَ عَشَرَ",
    openingArabic: "يَا عُدَّت۪ي عِنْدَ شِدَّت۪ي",
    openingTr: "Ey zorluk ve sıkıntı anında yegâne dayanağım:",
    items: [
      { id: 1, arabic: "يَا عُدَّت۪ي عِنْدَ شِدَّت۪ي", reading: "Yâ Uddetî inde şiddetî", meaning: "Ey şiddet ve zorluk anında en güvenilir hazırlığım" },
      { id: 2, arabic: "يَا رَجَٓائ۪ي عِنْدَ مُص۪يبَت۪ي", reading: "Yâ Recâî inde musîbetî", meaning: "Ey musibet ve keder anında yegâne ümidim" },
      { id: 3, arabic: "يَا مُونِس۪ي عِنْدَ وَحْشَت۪ي", reading: "Yâ Mûnisî inde vahşetî", meaning: "Ey yalnızlık ve ıssızlıkta en yakın dostum ve tesellicim" },
      { id: 4, arabic: "يَا صَاحِب۪ي عِنْدَ غُرْبَت۪ي", reading: "Yâ Sâhibî inde gurbetî", meaning: "Ey gurbet diyarında gerçek ve vefalı yoldaşım" },
      { id: 5, arabic: "يَا وَلِيّ۪ي عِنْدَ نِعْمَت۪ي", reading: "Yâ Veliyyî inde ni'metî", meaning: "Ey nimet ve ihsanlarımın hakiki velisi" },
      { id: 6, arabic: "يَا كَاشِف۪ي عِنْدَ كُرْبَت۪ي", reading: "Yâ Kâşifî inde kurbetî", meaning: "Ey sıkıntı ve kederlerimi dağıtan ferahlatıcım" },
      { id: 7, arabic: "يَا غِيَاث۪ي عِنْدَ اضْطِرَار۪ي", reading: "Yâ Gıyâsî inde'dtırârî", meaning: "Ey çaresiz ve muztar kaldığımda imdadıma koşan" },
      { id: 8, arabic: "يَا دَل۪يل۪ي عِنْدَ حَيْرَت۪ي", reading: "Yâ Delîlî inde hayretî", meaning: "Ey şaşkınlık ve tereddütte yol gösteren rehberim" },
      { id: 9, arabic: "يَا غَنِيّ۪ي عِنْدَ افْتِقَار۪ي", reading: "Yâ Ganiyyî inde'ftikârî", meaning: "Ey fakirlik ve muhtaçlık anında zenginlik kaynağım" },
      { id: 10, arabic: "يَا مَلْجَا۪ي عِنْدَ كُلِّ هَمٍّ", reading: "Yâ Melceî inde külli hemm", meaning: "Ey her türlü keder ve sarsıntıda sığındığım melceim" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 12,
    introTr: "Ey gizli ve aşikâr her şey ilmi dahilinde olan Âlim-i Zülcelal;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّانِيَ عَشَرَ",
    openingArabic: "يَا عَلَّامَ الْغُيُوبِ",
    openingTr: "Ey bütün gaybları hakkıyla bilen Allah'ım:",
    items: [
      { id: 1, arabic: "يَا عَلَّامَ الْغُيُوبِ", reading: "Yâ Allâme'l-guyûb", meaning: "Ey görünmeyen bütün gayb alemlerini hakkıyla bilen" },
      { id: 2, arabic: "يَا غَفَّارَ الذُّنُوبِ", reading: "Yâ Gaffâra'z-zünûb", meaning: "Ey günahları ve kusurları tekrar tekrar bağışlayan" },
      { id: 3, arabic: "يَا سَتَّارَ الْعُيُوبِ", reading: "Yâ Settâra'l-uyûb", meaning: "Ey ayıp ve kusurları lütfuyla örten" },
      { id: 4, arabic: "يَا كَشَّافَ الْكُرُوبِ", reading: "Yâ Keşşâfe'l-kürûb", meaning: "Ey en ağır gam, keder ve sıkıntıları kaldıran" },
      { id: 5, arabic: "يَا مُقَلِّبَ الْقُلُوبِ", reading: "Yâ Mukallibe'l-kulûb", meaning: "Ey kalpleri dilediği yöne çeviren ve hidayet veren" },
      { id: 6, arabic: "يَا طَب۪يبَ الْقُلُوبِ", reading: "Yâ Tabîbe'l-kulûb", meaning: "Ey manevi dertli ve yaralı kalplerin yegâne tabibi" },
      { id: 7, arabic: "يَا مُنَوِّرَ الْقُلُوبِ", reading: "Yâ Münevvira'l-kulûb", meaning: "Ey kalpleri marifet ve iman nuruyla aydınlatan" },
      { id: 8, arabic: "يَا اَن۪يسَ الْقُلُوبِ", reading: "Yâ Enîse'l-kulûb", meaning: "Ey zikriyle gönüllere ünsiyet ve huzur veren" },
      { id: 9, arabic: "يَا مُفَرِّجَ الْهُمُومِ", reading: "Yâ Müferrice'l-hümûm", meaning: "Ey dert ve tasaları ferahlığa tebdil eden" },
      { id: 10, arabic: "يَا مُنَفِّسَ الْغُمُومِ", reading: "Yâ Müneffise'l-gumûm", meaning: "Ey iç sıkıntılarını ve gam bulutlarını dağıtan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 13,
    introTr: "Ey kemal sıfatlarıyla muttasıf ve noksan sıfatlardan münezzeh Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّالِثَ عَشَرَ",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden istiyorum:",
    items: [
      { id: 1, arabic: "يَا جَل۪يلُ", reading: "Yâ Celîl", meaning: "Ey azamet ve celâlet sahibi yüce Zat" },
      { id: 2, arabic: "يَا جَم۪يلُ", reading: "Yâ Cemîl", meaning: "Ey nihayetsiz güzellik ve kemal sahibi" },
      { id: 3, arabic: "يَا وَك۪يلُ", reading: "Yâ Vekîl", meaning: "Ey Kendisine güvenilip işler havale edilen en hayırlı vekil" },
      { id: 4, arabic: "يَا كَف۪يلُ", reading: "Yâ Kefîl", meaning: "Ey yarattıklarının her ihtiyacına kefil olan" },
      { id: 5, arabic: "يَا دَل۪يلُ", reading: "Yâ Delîl", meaning: "Ey hak ve hakikate ulaştıran en doğru rehber" },
      { id: 6, arabic: "يَا مُق۪يلُ", reading: "Yâ Mukîl", meaning: "Ey tövbe edenlerin hatalarını ve düşüşlerini bağışlayan" },
      { id: 7, arabic: "يَا خَب۪يرُ", reading: "Yâ Habîr", meaning: "Ey her şeyin iç yüzünden ve gizlisinden haberdar olan" },
      { id: 8, arabic: "يَا لَط۪يفُ", reading: "Yâ Latîf", meaning: "Ey lütfu ve keremi pek ince ve sınırsız olan" },
      { id: 9, arabic: "يَا عَز۪يزُ", reading: "Yâ Azîz", meaning: "Ey mutlak galip ve asla mağlup edilemeyen" },
      { id: 10, arabic: "يَا مَل۪يكُ", reading: "Yâ Melîk", meaning: "Ey mülkün yegâne sultanı ve mutlak hükümdarı" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 14,
    introTr: "Ey çaresizlerin yardımcısı ve hak yolun hidayet rehberi Mevlâm;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الرَّابِعَ عَشَرَ",
    openingArabic: "يَا دَل۪يلَ الْمُتَحَيِّر۪ينَ",
    openingTr: "Ey şaşkınlık içinde kalanların rehberi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا دَل۪يلَ الْمُتَحَيِّر۪ينَ", reading: "Yâ Delîle'l-mütehayyirîn", meaning: "Ey şaşkınlık ve tereddüt içinde bocalayanların yol göstericisi" },
      { id: 2, arabic: "يَا غِيَاثَ الْمُسْتَغ۪يث۪ينَ", reading: "Yâ Gıyâse'l-müstegîsîn", meaning: "Ey feryad edip yardım dileyenlerin imdadına koşan" },
      { id: 3, arabic: "يَا صَر۪يخَ الْمُسْتَصْرِخ۪ينَ", reading: "Yâ Sarîha'l-müstasrihîn", meaning: "Ey feryad-ı figan edenlerin sesini işitip kurtaran" },
      { id: 4, arabic: "يَا جَارَ الْمُسْتَج۪ير۪ينَ", reading: "Yâ Câra'l-müstecîrîn", meaning: "Ey Kendisine sığınanlara eman ve himaye veren" },
      { id: 5, arabic: "يَا اَمَانَ الْخَٓائِف۪ينَ", reading: "Yâ Emâne'l-hâifîn", meaning: "Ey korku ve dehşet içinde kalanların sığınağı" },
      { id: 6, arabic: "يَا عَوْنَ الْمُؤْمِن۪ينَ", reading: "Yâ Avne'l-mü'minîn", meaning: "Ey inanan kullarının gerçek ve daimi yardımcısı" },
      { id: 7, arabic: "يَا رَاحِمَ الْمَسَاك۪ينَ", reading: "Yâ Râhime'l-mesâkîn", meaning: "Ey biçare ve yoksullara sonsuz merhamet eden" },
      { id: 8, arabic: "يَا مَلْجَاَ الْعَاص۪ينَ", reading: "Yâ Melcee'l-âsîn", meaning: "Ey pişman olup tövbe eden günahkarların sığınağı" },
      { id: 9, arabic: "يَا غَافِرَ الْمُذْنِب۪ينَ", reading: "Yâ Gâfire'l-müznibîn", meaning: "Ey günah işleyenleri mağfiretiyle bağışlayan" },
      { id: 10, arabic: "يَا مُج۪يبَ دَعْوَةِ الْمُضْطَرّ۪ينَ", reading: "Yâ Mûcîbe da'veti'l-muztarrîn", meaning: "Ey darda kalmışların içten dualarına icabet eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 15,
    introTr: "Ey kerem ve ihsan deryası olan, lütufları nihayetsiz Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الْخَامِسَ عَشَرَ",
    openingArabic: "يَا ذَا الْجُودِ وَالْاِحْسَانِ",
    openingTr: "Ey cömertlik ve sonsuz ihsan sahibi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا ذَا الْجُودِ وَالْاِحْسَانِ", reading: "Yâ Ze'l-cûdi ve'l-ihsân", meaning: "Ey sınırsız cömertlik ve hesapsız ihsan sahibi" },
      { id: 2, arabic: "يَا ذَا الْفَضْلِ وَالْاِمْتِنَانِ", reading: "Yâ Ze'l-fadli ve'l-imtinân", meaning: "Ey üstün fazilet ve minnetsiz lütuf sahibi" },
      { id: 3, arabic: "يَا ذَا الْاَمْنِ وَالْاَمَانِ", reading: "Yâ Ze'l-emni ve'l-emân", meaning: "Ey huzur, emniyet ve korkulardan kurtuluş bahşeden" },
      { id: 4, arabic: "يَا ذَا الْقُدْسِ وَالسُّبْحَانِ", reading: "Yâ Ze'l-kudsi ve's-sübhân", meaning: "Ey her türlü kusur ve noksanlıktan pâk ve mukaddes olan" },
      { id: 5, arabic: "يَا ذَا الْحِكْمَةِ وَالْبَيَانِ", reading: "Yâ Ze'l-hikmeti ve'l-beyân", meaning: "Ey mutlak hikmet ve her şeyi açıklayan ilim sahibi" },
      { id: 6, arabic: "يَا ذَا الرَّحْمَةِ وَالرِّضْوَانِ", reading: "Yâ Ze'r-rahmeti ve'r-rıdvân", meaning: "Ey sonsuz rahmet ve rıza-i ilahi sahibi" },
      { id: 7, arabic: "يَا ذَا الْحُجَّةِ وَالْبُرْهَانِ", reading: "Yâ Ze'l-hucceti ve'l-bürhân", meaning: "Ey kesin hüccet ve apaçık delillerin sahibi" },
      { id: 8, arabic: "يَا ذَا الْعَظَمَةِ وَالسُّلْطَانِ", reading: "Yâ Ze'l-azameti ve's-sultân", meaning: "Ey eşsiz büyüklük ve sarsılmaz saltanat sahibi" },
      { id: 9, arabic: "يَا ذَا الرَّاْفَةِ وَالْمُسْتَعَانِ", reading: "Yâ Ze'r-ra'feti ve'l-müsteân", meaning: "Ey pek şefkatli olan ve her işte Kendisinden yardım istenen" },
      { id: 10, arabic: "يَا ذَا الْعَفْوِ وَالْغُفْرَانِ", reading: "Yâ Ze'l-afvi ve'l-gufrân", meaning: "Ey affı ve mağfireti nihayetsiz olan Mevlâm" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 16,
    introTr: "Ey bütün alemlerin terbiyecisi ve yegâne mâliki olan Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ السَّادِسَ عَشَرَ",
    openingArabic: "يَا مَنْ هُوَ رَبُّ كُلِّ شَيْءٍ",
    openingTr: "Ey her şeyin hakiki Rabbi olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا مَنْ هُوَ رَبُّ كُلِّ شَيْءٍ", reading: "Yâ Men hüve Rabbu külli şey'", meaning: "Ey var olan her şeyin yegâne Rabbi ve Terbiyecisi" },
      { id: 2, arabic: "يَا مَنْ هُوَ اِلٰهُ كُلِّ شَيْءٍ", reading: "Yâ Men hüve İlâhu külli şey'", meaning: "Ey her şeyin Kendisine ibadet ettiği gerçek İlah" },
      { id: 3, arabic: "يَا مَنْ هُوَ خَالِقُ كُلِّ شَيْءٍ", reading: "Yâ Men hüve Hâliku külli şey'", meaning: "Ey zerrelerden kürelere her şeyi yaratan Yaratıcı" },
      { id: 4, arabic: "يَا مَنْ هُوَ صَانِعُ كُلِّ شَيْءٍ", reading: "Yâ Men hüve Sâni'u külli şey'", meaning: "Ey her şeyi sanatlı ve hikmetli var eden Sanatkar" },
      { id: 5, arabic: "يَا مَنْ هُوَ قَبْلَ كُلِّ شَيْءٍ", reading: "Yâ Men hüve kable külli şey'", meaning: "Ey her şeyden önce var olan Ezeli Zat" },
      { id: 6, arabic: "يَا مَنْ هُوَ بَعْدَ كُلِّ شَيْءٍ", reading: "Yâ Men hüve ba'de külli şey'", meaning: "Ey her şey yok olduktan sonra baki kalan Ebedi Zat" },
      { id: 7, arabic: "يَا مَنْ هُوَ فَوْقَ كُلِّ شَيْءٍ", reading: "Yâ Men hüve fevka külli şey'", meaning: "Ey kudret ve azametiyle her şeyden pek yüce olan" },
      { id: 8, arabic: "يَا مَنْ هُوَ عَالِمٌ بِكُلِّ شَيْءٍ", reading: "Yâ Men hüve âlimün bikülli şey'", meaning: "Ey her şeyin bütün hallerini eksiksiz bilen" },
      { id: 9, arabic: "يَا مَنْ هُوَ قَادِرٌ عَلٰى كُلِّ شَيْءٍ", reading: "Yâ Men hüve kâdirun alâ külli şey'", meaning: "Ey her şeye gücü yeten mutlak Kadir" },
      { id: 10, arabic: "يَا مَنْ هُوَ يَبْقٰى وَيَفْنٰى كُلُّ شَيْءٍ", reading: "Yâ Men hüve yebkâ ve yefnâ küllü şey'", meaning: "Ey her şey faniliğe mahkumken baki kalan Zülcelal" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 17,
    introTr: "Ey güven veren, koruyup gözeten Hafîz ve Müheymin Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ السَّابِعَ عَشَرَ",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin tecellileriyle Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مُؤْمِنُ", reading: "Yâ Mü'min", meaning: "Ey gönüllere iman nuru veren ve kullarını emniyette kılan" },
      { id: 2, arabic: "يَا مُهَيْمِنُ", reading: "Yâ Müheymin", meaning: "Ey her şeyi görüp gözeten ve koruyucusu olan" },
      { id: 3, arabic: "يَا مُكَوِّنُ", reading: "Yâ Mükevvin", meaning: "Ey bütün kainatı ve varlıkları yoktan var edip şekillendiren" },
      { id: 4, arabic: "يَا مُلَقِّنُ", reading: "Yâ Mülakkin", meaning: "Ey kullarına hakkı ve doğruyu ilham buyuran" },
      { id: 5, arabic: "يَا مُبَيِّنُ", reading: "Yâ Mübeyyin", meaning: "Ey hakikatleri apaçık ortaya koyan ve açıklayan" },
      { id: 6, arabic: "يَا مُهَوِّنُ", reading: "Yâ Mühevvin", meaning: "Ey en güç ve zor işleri kudretiyle kolaylaştıran" },
      { id: 7, arabic: "يَا مُمَكِّنُ", reading: "Yâ Mümekkin", meaning: "Ey mülkünde dilediğini güç ve iktidar sahibi kılan" },
      { id: 8, arabic: "يَا مُزَيِّنُ", reading: "Yâ Müzeyyin", meaning: "Ey kainatı ve mahlukatı süsleyip güzelleştiren" },
      { id: 9, arabic: "يَا مُعْلِنُ", reading: "Yâ Mu'lin", meaning: "Ey azamet ve kudret delillerini her zerrede ilan eden" },
      { id: 10, arabic: "يَا مُقَسِّمُ", reading: "Yâ Mukassim", meaning: "Ey rızıkları ve nasipleri adaletle paylaştıran" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 18,
    introTr: "Ey saltanatı zeval bulmayan ve varlığı ebedi olan Hükümran;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الثَّامِنَ عَشَرَ",
    openingArabic: "يَا مَنْ هُوَ ف۪ي مُلْكِهِ مُق۪يمٌ",
    openingTr: "Ey mülkünde daim ve kaim olan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا مَنْ هُوَ ف۪ي مُلْكِهِ مُق۪يمٌ", reading: "Yâ Men hüve fî mülkihî mukîm", meaning: "Ey saltanat ve mülkünde daimi ve kaim olan" },
      { id: 2, arabic: "يَا مَنْ هُوَ ف۪ي عِزِّهِ قَد۪يمٌ", reading: "Yâ Men hüve fî izzihî kadîm", meaning: "Ey izzet ve yüceliğinde ezeli olan" },
      { id: 3, arabic: "يَا مَنْ هُوَ ف۪ي سُلْطَانِهِ عَظ۪يمٌ", reading: "Yâ Men hüve fî sultânihî azîm", meaning: "Ey hakimiyet ve hükümranlığında pek yüce olan" },
      { id: 4, arabic: "يَا مَنْ هُوَ عَلٰى عِبَادِهِ رَح۪يمٌ", reading: "Yâ Men hüve alâ ibâdihî rahîm", meaning: "Ey aciz kullarına karşı pek merhametli olan" },
      { id: 5, arabic: "يَا مَنْ هُوَ بِكُلِّ شَيْءٍ عَل۪يمٌ", reading: "Yâ Men hüve bikülli şey'in alîm", meaning: "Ey zerrelerden kürelere her şeyi hakkıyla bilen" },
      { id: 6, arabic: "يَا مَنْ هُوَ بِمَنْ عَصَاهُ حَل۪يمٌ", reading: "Yâ Men hüve bimen asâhu halîm", meaning: "Ey Kendisine isyan edenlere dahi mühlet tanıyıp yumuşak davranan" },
      { id: 7, arabic: "يَا مَنْ هُوَ بِمَنْ رَجَاهُ كَر۪يمٌ", reading: "Yâ Men hüve bimen recâhu kerîm", meaning: "Ey Kendisine ümit bağlayanlara pek cömert ve ikramkar olan" },
      { id: 8, arabic: "يَا مَنْ هُوَ ف۪ي صُنْعِهِ حَك۪يمٌ", reading: "Yâ Men hüve fî sun'ihî hakîm", meaning: "Ey yarattığı her sanatta sonsuz hikmet sahibi olan" },
      { id: 9, arabic: "يَا مَنْ هُوَ ف۪ي حِكْمَتِهِ لَط۪يفٌ", reading: "Yâ Men hüve fî hikmetihî latîf", meaning: "Ey hikmetli tecellilerinde lütuf ve ihsanı gizli olan" },
      { id: 10, arabic: "يَا مَنْ هُوَ ف۪ي لُطْفِهِ خَب۪يرٌ", reading: "Yâ Men hüve fî lutfihî habîr", meaning: "Ey bütün lütuflarında kullarının inceliklerini bilen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 19,
    introTr: "Ey kapısından başka sığınılacak melce bulunmayan Kerim Rabbim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ التَّاسِعَ عَشَرَ",
    openingArabic: "يَا مَنْ لَا يُرْجٰى اِلَّا فَضْلُهُ",
    openingTr: "Ey yalnız fazl ve keremi umulan Allah'ım:",
    items: [
      { id: 1, arabic: "يَا مَنْ لَا يُرْجٰى اِلَّا فَضْلُهُ", reading: "Yâ Men lâ yürcâ illâ fadluh", meaning: "Ey ancak lütuf ve keremi umulan" },
      { id: 2, arabic: "يَا مَنْ لَا يُسْئَلُ اِلَّا عَفْوُهُ", reading: "Yâ Men lâ yüs'elü illâ afvuh", meaning: "Ey sadece af ve mağfireti dilenen" },
      { id: 3, arabic: "يَا مَنْ لَا يُنْظَرُ اِلَّا بِرُّهُ", reading: "Yâ Men lâ yünzaru illâ birruh", meaning: "Ey yalnız iyilik ve ihsanı gözlenen" },
      { id: 4, arabic: "يَا مَنْ لَا يُخَافُ اِلَّا عَدْلُهُ", reading: "Yâ Men lâ yühâfü illâ adluh", meaning: "Ey sadece mutlak adaletinden korkulan" },
      { id: 5, arabic: "يَا مَنْ لَا يَدُومُ اِلَّا مُلْكُهُ", reading: "Yâ Men lâ yedûmü illâ mülküh", meaning: "Ey hükümranlığından başka hiçbir mülk baki kalmayan" },
      { id: 6, arabic: "يَا مَنْ لَا سُلْطَانَ اِلَّا سُلْطَانُهُ", reading: "Yâ Men lâ sultâne illâ sultânuh", meaning: "Ey mutlak hakimiyetinden başka egemenlik olmayan" },
      { id: 7, arabic: "يَا مَنْ وَسِعَتْ كُلَّ شَيْءٍ رَحْمَتُهُ", reading: "Yâ Men vesiat külle şey'in rahmetüh", meaning: "Ey rahmeti bütün kainatı ve mahlukatı kuşatan" },
      { id: 8, arabic: "يَا مَنْ سَبَقَتْ رَحْمَتُهُ غَضَبَهُ", reading: "Yâ Men sebekat rahmetühü gadabeh", meaning: "Ey merhameti gazabının önüne geçen" },
      { id: 9, arabic: "يَا مَنْ اَحَاطَ بِكُلِّ شَيْءٍ عِلْمُهُ", reading: "Yâ Men ehâta bikülli şey'in ilmüh", meaning: "Ey ilmi var olan her şeyi kuşatan" },
      { id: 10, arabic: "يَا مَنْ لَيْسَ اَحَدٌ مِثْلَهُ", reading: "Yâ Men leyse ehadün misleh", meaning: "Ey dengi, benzeri ve şeriki bulunmayan Ehad" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 20,
    introTr: "Ey dertlilerin derdine derman olan Halık-ı Kerim;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ الْعِشْرُونَ",
    openingArabic: "يَا فَارِجَ الْهَمِّ",
    openingTr: "Ey kederleri dağıtan, gamları gideren Allah'ım:",
    items: [
      { id: 1, arabic: "يَا فَارِجَ الْهَمِّ", reading: "Yâ Fârice'l-hemm", meaning: "Ey gam ve kederleri lütfuyla ferahlatan" },
      { id: 2, arabic: "يَا كَاشِفَ الْغَمِّ", reading: "Yâ Kâşife'l-gamm", meaning: "Ey iç sıkıntılarını ve keder bulutlarını kaldıran" },
      { id: 3, arabic: "يَا غَافِرَ الذَّنْبِ", reading: "Yâ Gâfire'z-zenb", meaning: "Ey günahları affedip örten" },
      { id: 4, arabic: "يَا قَابِلَ التَّوْبِ", reading: "Yâ Kâbile't-tevb", meaning: "Ey samimi pişmanlıkları ve tevbeleri kabul eden" },
      { id: 5, arabic: "يَا خَالِقَ الْخَلْقِ", reading: "Yâ Hâlika'l-halk", meaning: "Ey bütün yaratılmışları kusursuz yaratan" },
      { id: 6, arabic: "يَا صَادِقَ الْوَعْدِ", reading: "Yâ Sâdika'l-va'd", meaning: "Ey vaadinde ve ahdinde sadık olan" },
      { id: 7, arabic: "يَا مُوفِيَ الْعَهْدِ", reading: "Yâ Mûfiye'l-ahd", meaning: "Ey sözünü ve vaadini eksiksiz yerine getiren" },
      { id: 8, arabic: "يَا عَالِمَ السِّرِّ", reading: "Yâ Âlime's-sırr", meaning: "Ey kalplerin en derin sırlarını bilen" },
      { id: 9, arabic: "يَا فَالِقَ الْحَبِّ", reading: "Yâ Fâlika'l-habb", meaning: "Ey tohumları yarıp içinden hayat filizleri çıkaran" },
      { id: 10, arabic: "يَا رَازِقَ الْاَنَامِ", reading: "Yâ Râzika'l-enâm", meaning: "Ey bütün canlıların ve insanların rızkını bahşeden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 21,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 21. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 21",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 2, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 3, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 5, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 6, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 7, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 8, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 9, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 10, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 22,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 22. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 22",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 2, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 3, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 4, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 5, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 6, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 7, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 8, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 9, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 10, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 23,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 23. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 23",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 2, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 3, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 4, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 5, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 6, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 7, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 8, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 9, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 10, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 24,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 24. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 24",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 2, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 3, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 4, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 5, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 6, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 7, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 8, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 9, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 10, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 25,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 25. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 25",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 2, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 3, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 4, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 5, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 6, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 7, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 9, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 10, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 26,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 26. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 26",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 2, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 3, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 4, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 6, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 7, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 8, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 10, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 27,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 27. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 27",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 3, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 4, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 5, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 7, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 8, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 9, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 10, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 28,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 28. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 28",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 2, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 4, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 5, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 6, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 7, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 8, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 9, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 10, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 29,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 29. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 29",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 2, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 3, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 4, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 5, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 6, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 7, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 8, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 9, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 10, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 30,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 30. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 30",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 2, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 3, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 4, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 5, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 6, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 7, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 8, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 9, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 10, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 31,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 31. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 31",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 2, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 3, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 4, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 5, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 6, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 7, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 8, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 9, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 32,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 32. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 32",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 2, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 3, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 4, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 5, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 6, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 8, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 9, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 10, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 33,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 33. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 33",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 2, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 3, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 5, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 6, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 7, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 9, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 10, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 34,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 34. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 34",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 2, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 3, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 4, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 6, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 7, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 8, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 9, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 10, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 35,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 35. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 35",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 3, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 4, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 5, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 6, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 7, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 8, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 9, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 10, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 36,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 36. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 36",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 2, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 3, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 4, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 5, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 6, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 7, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 8, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 9, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 10, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 37,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 37. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 37",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 2, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 3, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 4, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 5, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 6, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 7, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 8, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 9, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 10, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 38,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 38. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 38",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 2, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 3, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 4, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 5, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 6, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 7, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 8, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 10, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 39,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 39. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 39",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 2, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 3, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 4, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 5, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 7, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 8, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 9, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 40,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 40. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 40",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 2, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 4, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 5, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 6, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 8, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 9, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 10, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 41,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 41. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 41",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 2, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 3, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 5, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 6, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 7, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 8, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 9, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 10, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 42,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 42. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 42",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 2, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 3, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 4, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 5, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 6, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 7, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 8, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 9, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 10, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 43,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 43. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 43",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 2, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 3, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 4, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 5, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 6, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 7, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 8, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 9, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 10, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 44,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 44. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 44",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 2, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 3, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 4, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 5, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 6, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 7, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 8, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 9, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 10, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 45,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 45. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 45",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 2, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 3, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 4, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 5, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 6, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 7, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 9, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 10, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 46,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 46. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 46",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 2, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 3, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 4, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 6, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 7, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 8, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 10, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 47,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 47. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 47",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 3, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 4, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 5, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 7, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 8, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 9, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 10, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 48,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 48. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 48",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 2, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 4, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 5, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 6, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 7, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 8, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 9, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 10, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 49,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 49. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 49",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 2, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 3, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 4, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 5, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 6, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 7, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 8, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 9, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 10, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 50,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 50. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 50",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 2, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 3, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 4, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 5, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 6, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 7, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 8, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 9, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 10, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 51,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 51. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 51",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 2, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 3, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 4, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 5, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 6, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 7, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 8, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 9, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 52,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 52. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 52",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 2, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 3, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 4, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 5, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 6, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 8, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 9, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 10, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 53,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 53. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 53",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 2, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 3, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 5, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 6, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 7, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 9, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 10, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 54,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 54. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 54",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 2, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 3, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 4, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 6, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 7, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 8, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 9, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 10, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 55,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 55. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 55",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 3, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 4, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 5, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 6, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 7, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 8, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 9, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 10, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 56,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 56. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 56",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 2, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 3, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 4, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 5, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 6, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 7, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 8, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 9, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 10, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 57,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 57. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 57",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 2, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 3, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 4, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 5, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 6, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 7, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 8, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 9, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 10, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 58,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 58. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 58",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 2, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 3, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 4, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 5, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 6, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 7, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 8, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 10, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 59,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 59. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 59",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 2, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 3, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 4, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 5, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 7, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 8, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 9, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 60,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 60. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 60",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 2, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 4, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 5, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 6, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 8, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 9, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 10, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 61,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 61. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 61",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 2, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 3, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 5, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 6, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 7, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 8, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 9, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 10, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 62,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 62. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 62",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 2, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 3, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 4, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 5, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 6, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 7, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 8, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 9, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 10, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 63,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 63. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 63",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 2, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 3, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 4, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 5, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 6, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 7, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 8, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 9, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 10, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 64,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 64. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 64",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 2, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 3, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 4, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 5, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 6, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 7, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 8, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 9, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 10, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 65,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 65. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 65",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 2, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 3, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 4, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 5, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 6, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 7, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 9, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 10, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 66,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 66. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 66",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 2, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 3, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 4, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 6, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 7, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 8, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 10, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 67,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 67. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 67",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 3, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 4, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 5, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 7, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 8, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 9, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 10, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 68,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 68. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 68",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 2, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 4, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 5, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 6, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 7, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 8, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 9, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 10, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 69,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 69. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 69",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 2, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 3, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 4, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 5, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 6, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 7, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 8, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 9, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 10, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 70,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 70. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 70",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 2, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 3, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 4, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 5, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 6, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 7, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 8, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 9, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 10, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 71,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 71. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 71",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 2, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 3, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 4, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 5, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 6, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 7, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 8, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 9, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 72,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 72. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 72",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 2, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 3, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 4, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 5, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 6, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 8, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 9, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 10, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 73,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 73. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 73",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 2, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 3, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 5, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 6, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 7, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 9, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 10, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 74,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 74. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 74",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 2, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 3, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 4, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 6, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 7, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 8, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 9, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 10, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 75,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 75. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 75",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 3, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 4, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 5, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 6, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 7, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 8, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 9, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 10, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 76,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 76. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 76",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 2, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 3, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 4, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 5, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 6, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 7, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 8, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 9, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 10, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 77,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 77. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 77",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 2, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 3, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 4, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 5, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 6, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 7, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 8, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 9, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 10, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 78,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 78. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 78",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 2, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 3, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 4, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 5, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 6, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 7, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 8, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 10, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 79,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 79. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 79",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 2, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 3, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 4, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 5, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 7, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 8, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 9, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 80,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 80. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 80",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 2, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 4, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 5, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 6, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 8, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 9, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 10, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 81,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 81. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 81",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 2, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 3, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 5, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 6, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 7, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 8, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 9, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 10, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 82,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 82. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 82",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 2, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 3, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 4, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 5, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 6, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 7, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 8, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 9, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 10, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 83,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 83. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 83",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 2, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 3, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 4, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 5, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 6, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 7, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 8, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 9, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 10, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 84,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 84. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 84",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 2, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 3, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 4, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 5, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 6, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 7, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 8, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 9, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 10, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 85,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 85. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 85",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 2, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 3, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 4, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 5, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 6, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 7, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 9, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 10, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 86,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 86. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 86",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 2, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 3, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 4, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 6, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 7, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 8, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 10, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 87,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 87. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 87",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 3, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 4, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 5, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 7, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 8, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 9, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 10, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 88,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 88. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 88",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 2, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 4, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 5, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 6, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 7, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 8, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 9, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 10, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 89,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 89. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 89",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 2, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 3, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 4, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 5, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 6, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 7, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 8, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 9, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 10, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 90,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 90. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 90",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 2, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 3, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 4, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 5, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 6, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 7, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 8, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 9, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 10, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 91,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 91. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 91",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 2, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 3, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 4, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 5, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 6, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 7, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 8, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 9, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 92,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 92. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 92",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 2, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 3, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 4, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 5, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 6, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 8, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 9, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 10, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 93,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 93. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 93",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 2, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 3, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 4, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 5, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 6, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 7, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 8, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 9, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 10, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 94,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 94. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 94",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 2, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 3, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 4, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 5, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 6, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 7, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 8, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 9, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 10, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 95,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 95. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 95",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 2, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 3, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 4, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 5, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 6, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 7, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 8, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 9, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 10, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 96,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 96. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 96",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 2, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" },
      { id: 3, arabic: "يَا بَدِيُّ", reading: "Yâ Bediyy", meaning: "Ey her şeyi örneksiz ve benzersiz yaratan" },
      { id: 4, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 5, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 6, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 7, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 8, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 9, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 10, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 97,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 97. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 97",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا قَوِيُّ", reading: "Yâ Kaviyy", meaning: "Ey sonsuz güç ve kudret sahibi olan" },
      { id: 2, arabic: "يَا وَلِيُّ", reading: "Yâ Veliyy", meaning: "Ey dostlarına yardım eden gerçek sahip ve dost" },
      { id: 3, arabic: "يَا ظَاهِرُ", reading: "Yâ Zâhir", meaning: "Ey varlığı eserleriyle apaçık görünen" },
      { id: 4, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 5, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 6, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 7, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 8, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 9, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 10, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 98,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 98. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 98",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا بَاطِنُ", reading: "Yâ Bâtın", meaning: "Ey zatının hakikati akılların idrakinden gizli olan" },
      { id: 2, arabic: "يَا قَادِرُ", reading: "Yâ Kâdir", meaning: "Ey her şeye gücü yeten mutlak kudret sahibi" },
      { id: 3, arabic: "يَا مُقْتَدِرُ", reading: "Yâ Muktedir", meaning: "Ey dilediğini dilediği gibi icra eden" },
      { id: 4, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 5, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 6, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 7, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 8, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 9, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 10, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 99,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 99. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 99",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا اَوَّلُ", reading: "Yâ Evvel", meaning: "Ey varlığının başlangıcı olmayan ilk" },
      { id: 2, arabic: "يَا اٰخِرُ", reading: "Yâ Âhir", meaning: "Ey varlığının sonu olmayan ebedi" },
      { id: 3, arabic: "يَا فَرْدُ", reading: "Yâ Ferd", meaning: "Ey zatında ve sıfatlarında tek ve eşsiz olan" },
      { id: 4, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 5, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 6, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 7, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 8, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 9, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 10, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  },
  {
    babNumber: 100,
    introTr: "Ey kainatın Sahibi ve mevcudatın Hâlıkı olan Rabbim; 100. Babın esrarı ve isimlerinin tecellileriyle Senden af ve emân diliyorum;",
    bismillah: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
    arabicTitle: "اَلْبَابُ 100",
    openingArabic: "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
    openingTr: "Allah'ım! Şu mübarek isimlerinin hürmetine Senden niyaz ediyorum:",
    items: [
      { id: 1, arabic: "يَا وِتْرُ", reading: "Yâ Vitr", meaning: "Ey ortağı ve benzeri olmayan tek" },
      { id: 2, arabic: "يَا صَمَدُ", reading: "Yâ Samed", meaning: "Ey her şey Kendisine muhtaç olup Kendisi hiçbir şeye muhtaç olmayan" },
      { id: 3, arabic: "يَا سَنَدُ", reading: "Yâ Sened", meaning: "Ey bütün varlıkların dayandığı hakiki dayanak" },
      { id: 4, arabic: "يَا عَلِيُّ", reading: "Yâ Aliyy", meaning: "Ey yüceler yücesi olan" },
      { id: 5, arabic: "يَا وَفِيُّ", reading: "Yâ Vefiyy", meaning: "Ey sözünde duran ve vefası tam olan" },
      { id: 6, arabic: "يَا غَنِيُّ", reading: "Yâ Ganiyy", meaning: "Ey mutlak zengin ve hiçbir şeye muhtaç olmayan" },
      { id: 7, arabic: "يَا مَلِيُّ", reading: "Yâ Meliyy", meaning: "Ey zenginliği ve kudreti bitip tükenmeyen" },
      { id: 8, arabic: "يَا حَفِيُّ", reading: "Yâ Hafiyy", meaning: "Ey kullarına çok ikram ve iltifat eden" },
      { id: 9, arabic: "يَا رَضِيُّ", reading: "Yâ Radiyy", meaning: "Ey Kendisinden razı olunan ve kullarından razı olan" },
      { id: 10, arabic: "يَا زَكِيُّ", reading: "Yâ Zekiyy", meaning: "Ey her türlü kusurdan temiz ve pak olan" }
    ],
    refrainArabic: "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
    refrainTr: "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
  }
];

// Durum Yönetimi
let currentBabIndex = 0;

// DOM Elemanları
const coverView = document.getElementById("coverView");
const readingView = document.getElementById("readingView");
const openBookBtn = document.getElementById("openBookBtn");
const backToCoverBtn = document.getElementById("backToCoverBtn");

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

// Ekranı Uyanık Tutma (Screen Wake Lock API - Risale okuma konforu)
let wakeLock = null;
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator && !wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        wakeLock = null;
      });
    }
  } catch (err) {}
}

// Olay Dinleyicileri
if (openBookBtn) {
  const openBookHandler = (e) => {
    if (e.type === 'touchend') e.preventDefault();
    requestWakeLock();
    coverView.classList.remove("active");
    readingView.classList.add("active");
    renderBab(currentBabIndex);
  };
  openBookBtn.addEventListener("click", openBookHandler);
  openBookBtn.addEventListener("touchend", openBookHandler);
}

if (backToCoverBtn) {
  const backHandler = (e) => {
    if (e.type === 'touchend') e.preventDefault();
    readingView.classList.remove("active");
    coverView.classList.add("active");
  };
  backToCoverBtn.addEventListener("click", backHandler);
  backToCoverBtn.addEventListener("touchend", backHandler);
}

// Sayfa Render & 3D Çevirme Efekti
function renderBab(index, direction = 'next', sameAudioFile = false) {
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
  if (currentBabTitle) currentBabTitle.textContent = `Bab ${bab.babNumber}`;
  if (leftBabBadge) leftBabBadge.textContent = `#${bab.babNumber}`;
  if (rightBabBadge) rightBabBadge.textContent = `#${bab.babNumber}`;
  if (introText) introText.textContent = bab.introTr;
  if (refrainTrText) refrainTrText.textContent = bab.refrainTr;
  
  const hasSeparateOpening = bab.openingArabic && 
                             bab.openingArabic.trim() !== "" && 
                             (!bab.items[0] || bab.openingArabic.trim() !== bab.items[0].arabic.trim());
  if (arabicOpeningText) {
    if (hasSeparateOpening) {
      arabicOpeningText.textContent = bab.openingArabic;
      arabicOpeningText.style.display = "block";
    } else {
      arabicOpeningText.style.display = "none";
    }
  }
  if (refrainArText) refrainArText.textContent = bab.refrainArabic;

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
  if (translationList) {
    translationList.innerHTML = bab.items.map(item => `
      <div class="trans-item" id="trans-item-${item.id}" onclick="highlightItem(${item.id})">
        <span class="item-id">${item.id}.</span>
        <div class="item-content">
          <span class="item-reading">${item.reading}</span>
          <span class="item-meaning">${item.meaning}</span>
        </div>
      </div>
    `).join("");
  }

  // Arapça İsimler Listesi (Satır başına 3 isim)
  if (arabicNamesList) {
    const items = bab.items;
    let rows = [];
    for (let i = 0; i < items.length; i += 3) {
      const rowItems = items.slice(i, i + 3);
      const rowHtml = rowItems.map(item => `
        <div class="arabic-item" id="ar-item-${item.id}" onclick="highlightItem(${item.id})">
          <span class="arabic-star">✦</span>
          <span class="arabic-text">${item.arabic}</span>
          <span class="arabic-star">✦</span>
        </div>
      `).join("");
      rows.push(`<div class="arabic-row">${rowHtml}</div>`);
    }
    arabicNamesList.innerHTML = rows.join("");
  }

  // Nav butonları kontrol
  if (prevBabBtn) prevBabBtn.disabled = (index === 0);
  if (nextBabBtn) nextBabBtn.disabled = (index === cevsanData.length - 1);

  // Besmele: Sadece İlk Başta (Bab 1) görünsün, sonraki sayfalarda olmasın
  const bismillahEl = document.querySelector(".arabic-bismillah");
  if (bismillahEl) {
    bismillahEl.style.display = (index === 0) ? "block" : "none";
  }

  // Sayfanın en üstüne kaydır
  const mainBook = document.querySelector(".book-container");
  if (mainBook) mainBook.scrollTop = 0;

  // Ses çalınıyorsa ve bab değiştiyse, ilgili bölümü güncelle ve oynat
  // sameAudioFile=true ise sadece highlight tracker yeniden başlatılır (ses devam eder)
  if (isAudioPlaying) {
    if (sameAudioFile) {
      startHighlightTracker(); // Sesi durdurmadan sadece zamanlayıcıyı yeniden başlat
    } else {
      playCurrentBabAudio();
    }
  }
}

// SESLENDİRME MOTORU
let isAudioPlaying = false;
let globalAudio = new Audio();
let highlightInterval = null;
let currentHighlightId = null;
let currentNarrator = 'ishak'; // 'ishak' | 'hayri'
let currentArabicFont = 'Amiri'; // Seçili hat fontu

const audioToggleBtn = document.getElementById("audioToggleBtn");
const audioStatusIcon = document.getElementById("audioStatusIcon");
const audioBtnText = document.getElementById("audioBtnText");

function updateAudioBtnUI(playing) {
  if (!audioToggleBtn) return;
  if (playing) {
    audioToggleBtn.classList.add("playing");
    if (audioStatusIcon) audioStatusIcon.textContent = "❚❚";
    if (audioBtnText) audioBtnText.textContent = "Durdur";
  } else {
    audioToggleBtn.classList.remove("playing");
    if (audioStatusIcon) audioStatusIcon.textContent = "▶";
    if (audioBtnText) audioBtnText.textContent = "Dinle";
  }
}

// Okunan satırı / Arapça ismi / Besmele, Giriş ve Salli-Barik/Refrain kısmını kırmızı olarak vurgulama ve odaklama
function highlightItem(id) {
  // Önceki tüm aktif sınıfları temizle
  document.querySelectorAll(".trans-item.active, .arabic-item.active, .arabic-bismillah.active, .arabic-opening.active, .intro-box.active, .refrain-box.active").forEach(el => {
    el.classList.remove("active");
  });

  if (id === null || id === undefined) return;

  const bookContainer = document.querySelector(".book-container");

  // Özel Durum 1: Besmele (0.5s - 6.0s)
  if (id === 'bismillah') {
    const bismillahEl = document.querySelector(".arabic-bismillah");
    if (bismillahEl) bismillahEl.classList.add("active");
    if (bookContainer) bookContainer.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Özel Durum 2: Mukaddime ("Allâhümme innî es'elüke bi-esmâike...") (9.0s - 15.0s)
  if (id === 'opening') {
    const openingEl = document.getElementById("arabicOpeningText");
    const introEl = document.getElementById("introText");
    if (openingEl) openingEl.classList.add("active");
    if (introEl) introEl.classList.add("active");
    if (bookContainer) bookContainer.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Özel Durum 3: Nakarat / Refrain ("Sübhâneke yâ lâ ilâhe illâ ente...")
  if (id === 'refrain') {
    const refTr = document.getElementById("refrainTrText");
    const refAr = document.getElementById("refrainArText");
    if (refTr) refTr.classList.add("active");
    if (refAr) refAr.classList.add("active");
    const targetRef = (currentMobileView === 'ar' && refAr) ? refAr : (refTr || refAr);
    if (targetRef && bookContainer) {
      const containerRect = bookContainer.getBoundingClientRect();
      const targetRect = targetRef.getBoundingClientRect();
      const targetRelativeTop = targetRect.top - containerRect.top + bookContainer.scrollTop;
      bookContainer.scrollTo({
        top: Math.max(0, targetRelativeTop - 100),
        behavior: "smooth"
      });
    }
    return;
  }

  // Normal Esmalar (1'den 10'a)
  const transEl = document.getElementById(`trans-item-${id}`);
  const arEl = document.getElementById(`ar-item-${id}`);

  if (transEl) transEl.classList.add("active");
  if (arEl) arEl.classList.add("active");

  const targetEl = (currentMobileView === 'ar' && arEl) ? arEl : (transEl || arEl);
  if (targetEl) {
    if (bookContainer) {
      // 1. veya 2. esmada sayfa tepesini koru
      if (id <= 2) {
        bookContainer.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      // Hedef eleman zaten ekranın rahat okunabilir sınırları içindeyse sarsıntı yapma
      const containerRect = bookContainer.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      
      const isVisible = (
        targetRect.top >= containerRect.top + 30 &&
        targetRect.bottom <= containerRect.bottom - 40
      );

      if (!isVisible) {
        const targetRelativeTop = targetRect.top - containerRect.top + bookContainer.scrollTop;
        const desiredScrollTop = Math.max(0, targetRelativeTop - (containerRect.height / 3));

        bookContainer.scrollTo({
          top: desiredScrollTop,
          behavior: "smooth"
        });
      }
    } else {
      targetEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
}

let highlightTimeouts = [];

// 100 Babın her birinin hangi ses dosyasında (bolum_1..13.mp3) olduğu,
// dosya içi başlangıç saniyesi (offset) ve ortalama süresi (dur):
const BAB_AUDIO_CONFIG = [
  // Bölüm 1 (327s) - Bab 1-9 (9 bab)
  { bolum: 1, offset: 0,   dur: 37.5 },  // Bab 1 (Besmele + Uzun Giriş)
  { bolum: 1, offset: 38,  dur: 34.0 },  // Bab 2
  { bolum: 1, offset: 74,  dur: 32.0 },  // Bab 3
  { bolum: 1, offset: 107, dur: 39.0 },  // Bab 4
  { bolum: 1, offset: 148, dur: 45.0 },  // Bab 5
  { bolum: 1, offset: 195, dur: 30.0 },  // Bab 6
  { bolum: 1, offset: 226, dur: 34.0 },  // Bab 7
  { bolum: 1, offset: 261, dur: 34.0 },  // Bab 8
  { bolum: 1, offset: 296, dur: 31.0 },  // Bab 9

  // Bölüm 2 (280s) - Bab 10-17 (8 bab)
  { bolum: 2, offset: 0,   dur: 35.0 },  // Bab 10
  { bolum: 2, offset: 35,  dur: 35.0 },  // Bab 11
  { bolum: 2, offset: 70,  dur: 35.0 },  // Bab 12
  { bolum: 2, offset: 105, dur: 35.0 },  // Bab 13
  { bolum: 2, offset: 140, dur: 35.0 },  // Bab 14
  { bolum: 2, offset: 175, dur: 35.0 },  // Bab 15
  { bolum: 2, offset: 210, dur: 35.0 },  // Bab 16
  { bolum: 2, offset: 245, dur: 35.0 },  // Bab 17

  // Bölüm 3 (310s) - Bab 18-25 (8 bab)
  { bolum: 3, offset: 0,   dur: 38.0 },  // Bab 18
  { bolum: 3, offset: 38,  dur: 38.0 },  // Bab 19
  { bolum: 3, offset: 76,  dur: 38.0 },  // Bab 20
  { bolum: 3, offset: 114, dur: 38.0 },  // Bab 21
  { bolum: 3, offset: 152, dur: 38.0 },  // Bab 22
  { bolum: 3, offset: 190, dur: 38.0 },  // Bab 23
  { bolum: 3, offset: 228, dur: 38.0 },  // Bab 24
  { bolum: 3, offset: 266, dur: 44.0 },  // Bab 25

  // Bölüm 4 (270s) - Bab 26-32 (7 bab)
  { bolum: 4, offset: 0,   dur: 38.0 },  // Bab 26
  { bolum: 4, offset: 38,  dur: 38.0 },  // Bab 27
  { bolum: 4, offset: 76,  dur: 38.0 },  // Bab 28
  { bolum: 4, offset: 114, dur: 38.0 },  // Bab 29
  { bolum: 4, offset: 152, dur: 38.0 },  // Bab 30
  { bolum: 4, offset: 190, dur: 38.0 },  // Bab 31
  { bolum: 4, offset: 228, dur: 42.0 },  // Bab 32

  // Bölüm 5 (282s) - Bab 33-40 (8 bab)
  { bolum: 5, offset: 0,   dur: 35.0 },  // Bab 33
  { bolum: 5, offset: 35,  dur: 35.0 },  // Bab 34
  { bolum: 5, offset: 70,  dur: 35.0 },  // Bab 35
  { bolum: 5, offset: 105, dur: 35.0 },  // Bab 36
  { bolum: 5, offset: 140, dur: 35.0 },  // Bab 37
  { bolum: 5, offset: 175, dur: 35.0 },  // Bab 38
  { bolum: 5, offset: 210, dur: 35.0 },  // Bab 39
  { bolum: 5, offset: 245, dur: 37.0 },  // Bab 40

  // Bölüm 6 (444s) - Bab 41-52 (12 bab)
  { bolum: 6, offset: 0,   dur: 37.0 },  // Bab 41
  { bolum: 6, offset: 37,  dur: 37.0 },  // Bab 42
  { bolum: 6, offset: 74,  dur: 37.0 },  // Bab 43
  { bolum: 6, offset: 111, dur: 37.0 },  // Bab 44
  { bolum: 6, offset: 148, dur: 37.0 },  // Bab 45
  { bolum: 6, offset: 185, dur: 37.0 },  // Bab 46
  { bolum: 6, offset: 222, dur: 37.0 },  // Bab 47
  { bolum: 6, offset: 259, dur: 37.0 },  // Bab 48
  { bolum: 6, offset: 296, dur: 37.0 },  // Bab 49
  { bolum: 6, offset: 333, dur: 37.0 },  // Bab 50
  { bolum: 6, offset: 370, dur: 37.0 },  // Bab 51
  { bolum: 6, offset: 407, dur: 37.0 },  // Bab 52

  // Bölüm 7 (290s) - Bab 53-60 (8 bab)
  { bolum: 7, offset: 0,   dur: 36.0 },  // Bab 53
  { bolum: 7, offset: 36,  dur: 36.0 },  // Bab 54
  { bolum: 7, offset: 72,  dur: 36.0 },  // Bab 55
  { bolum: 7, offset: 108, dur: 36.0 },  // Bab 56
  { bolum: 7, offset: 144, dur: 36.0 },  // Bab 57
  { bolum: 7, offset: 180, dur: 36.0 },  // Bab 58
  { bolum: 7, offset: 216, dur: 36.0 },  // Bab 59
  { bolum: 7, offset: 252, dur: 38.0 },  // Bab 60

  // Bölüm 8 (295s) - Bab 61-68 (8 bab)
  { bolum: 8, offset: 0,   dur: 36.0 },  // Bab 61
  { bolum: 8, offset: 36,  dur: 36.0 },  // Bab 62
  { bolum: 8, offset: 72,  dur: 36.0 },  // Bab 63
  { bolum: 8, offset: 108, dur: 36.0 },  // Bab 64
  { bolum: 8, offset: 144, dur: 36.0 },  // Bab 65
  { bolum: 8, offset: 180, dur: 36.0 },  // Bab 66
  { bolum: 8, offset: 216, dur: 36.0 },  // Bab 67
  { bolum: 8, offset: 252, dur: 43.0 },  // Bab 68

  // Bölüm 9 (343s) - Bab 69-77 (9 bab)
  { bolum: 9, offset: 0,   dur: 38.0 },  // Bab 69
  { bolum: 9, offset: 38,  dur: 38.0 },  // Bab 70
  { bolum: 9, offset: 76,  dur: 38.0 },  // Bab 71
  { bolum: 9, offset: 114, dur: 38.0 },  // Bab 72
  { bolum: 9, offset: 152, dur: 38.0 },  // Bab 73
  { bolum: 9, offset: 190, dur: 38.0 },  // Bab 74
  { bolum: 9, offset: 228, dur: 38.0 },  // Bab 75
  { bolum: 9, offset: 266, dur: 38.0 },  // Bab 76
  { bolum: 9, offset: 304, dur: 39.0 },  // Bab 77

  // Bölüm 10 (304s) - Bab 78-85 (8 bab)
  { bolum: 10, offset: 0,   dur: 38.0 }, // Bab 78
  { bolum: 10, offset: 38,  dur: 38.0 }, // Bab 79
  { bolum: 10, offset: 76,  dur: 38.0 }, // Bab 80
  { bolum: 10, offset: 114, dur: 38.0 }, // Bab 81
  { bolum: 10, offset: 152, dur: 38.0 }, // Bab 82
  { bolum: 10, offset: 190, dur: 38.0 }, // Bab 83
  { bolum: 10, offset: 228, dur: 38.0 }, // Bab 84
  { bolum: 10, offset: 266, dur: 38.0 }, // Bab 85

  // Bölüm 11 (263s) - Bab 86-92 (7 bab)
  { bolum: 11, offset: 0,   dur: 37.0 }, // Bab 86
  { bolum: 11, offset: 37,  dur: 37.0 }, // Bab 87
  { bolum: 11, offset: 74,  dur: 37.0 }, // Bab 88
  { bolum: 11, offset: 111, dur: 37.0 }, // Bab 89
  { bolum: 11, offset: 148, dur: 37.0 }, // Bab 90
  { bolum: 11, offset: 185, dur: 37.0 }, // Bab 91
  { bolum: 11, offset: 222, dur: 41.0 }, // Bab 92

  // Bölüm 12 (219s) - Bab 93-97 (5 bab)
  { bolum: 12, offset: 0,   dur: 43.0 }, // Bab 93
  { bolum: 12, offset: 43,  dur: 43.0 }, // Bab 94
  { bolum: 12, offset: 86,  dur: 43.0 }, // Bab 95
  { bolum: 12, offset: 129, dur: 43.0 }, // Bab 96
  { bolum: 12, offset: 172, dur: 47.0 }, // Bab 97

  // Bölüm 13 (230s) - Bab 98-100 (3 bab + Dua)
  { bolum: 13, offset: 0,   dur: 38.0 }, // Bab 98
  { bolum: 13, offset: 38,  dur: 38.0 }, // Bab 99
  { bolum: 13, offset: 76,  dur: 39.0 }  // Bab 100
];

function getBabAudioInfo(babIndex) {
  const conf = BAB_AUDIO_CONFIG[babIndex] || { bolum: 1, offset: 0, dur: 35.0 };
  return {
    bolumNo: conf.bolum,
    audioSrc: `audio/ishak_danis/bolum_${conf.bolum}.mp3`,
    offsetSec: conf.offset,
    babSuresi: conf.dur
  };
}

// Özel hassas senkronize edilen bablar
const BAB_CUSTOM_TIMINGS = {
  // 1. Bab: Besmele(0.5s) + Giriş("Allâhumme inni...") + 10 Esma (15s..) + Nakarat (27.2s)
  0: {
    items: [
      { time: 500,   target: 'bismillah' },
      { time: 8500,  target: 'opening' },
      { time: 15000, target: 1 },
      { time: 16200, target: 2 },
      { time: 17400, target: 3 },
      { time: 18600, target: 4 },
      { time: 19800, target: 5 },
      { time: 21000, target: 6 },
      { time: 22200, target: 7 },
      { time: 23400, target: 8 },
      { time: 24600, target: 9 },
      { time: 25800, target: 10 },
      { time: 27200, target: 'refrain' },
      { time: 36000, target: null }
    ],
    flipTime: 37500
  },
  // 2. Bab: Giriş cümlesi yok, doğrudan 1. Esma ile başlar (Ses: 38.2s - 72.0s)
  1: {
    items: [
      { time: 200,   target: 1 },        // Yâ Seyyide's-sâdât (38.2s)
      { time: 2300,  target: 2 },        // Yâ Mûcîbe'd-da'avât (40.3s)
      { time: 4300,  target: 3 },        // Yâ Râfia'd-deracât (42.3s)
      { time: 6300,  target: 4 },        // Yâ Veliyye'l-hasenât (44.3s)
      { time: 8300,  target: 5 },        // Yâ Gâfire'l-hatî'ât (46.3s)
      { time: 10300, target: 6 },        // Yâ Mu'tiye'l-mes'elât (48.3s)
      { time: 12800, target: 7 },        // Yâ Kâbile't-tevbât (50.8s)
      { time: 14800, target: 8 },        // Yâ Sâmia'l-asvât (52.8s)
      { time: 16800, target: 9 },        // Yâ Âlime'l-hafiyyât (54.8s)
      { time: 19300, target: 10 },       // Yâ Dâfia'l-beliyyât (57.3s)
      { time: 22500, target: null },     // Esmalar bitti, nefes/duraklama
      { time: 25500, target: 'refrain' },// Nakarat: Sübhâneke... (63.5s - 71.8s)
      { time: 33500, target: null }      // Nakarat bitti
    ],
    flipTime: 34000                     // 72.0s: Sonraki baba geç
  }
};

function startHighlightTracker() {
  stopHighlightTracker();
  
  const bookContainer = document.querySelector(".book-container");
  if (bookContainer) {
    bookContainer.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { babSuresi } = getBabAudioInfo(currentBabIndex);
  const schedule = [];

  // Özel hassas zamanlama haritası varsa onu kullan
  if (BAB_CUSTOM_TIMINGS[currentBabIndex]) {
    const custom = BAB_CUSTOM_TIMINGS[currentBabIndex];
    custom.items.forEach(it => {
      schedule.push({ time: it.time, action: () => highlightItem(it.target) });
    });
    schedule.push({ time: custom.flipTime, action: () => autoFlipToNextBab() });
  } else {
    // Genel Bablar İçin Dinamik Akıllı Zamanlama
    const bab = cevsanData[currentBabIndex];
    const hasSeparateOpening = bab && bab.openingArabic && 
                               bab.openingArabic.trim() !== "" && 
                               (!bab.items[0] || bab.openingArabic.trim() !== bab.items[0].arabic.trim());
    const itemCount = bab ? bab.items.length : 10;
    const esmaStep = 2100; // Ortalama esma süresi 2.1 saniye

    if (hasSeparateOpening) {
      schedule.push({ time: 400, action: () => highlightItem('opening') });
      const esma1T = 3600;
      for (let i = 0; i < itemCount; i++) {
        const id = i + 1;
        schedule.push({ time: esma1T + (i * esmaStep), action: () => highlightItem(id) });
      }
      const esmaEndT = esma1T + (itemCount * esmaStep);
      schedule.push({ time: esmaEndT, action: () => highlightItem(null) });
      const refrainT = esmaEndT + 2500;
      schedule.push({ time: refrainT, action: () => highlightItem('refrain') });
      schedule.push({ time: Math.round(babSuresi * 1000) - 1000, action: () => highlightItem(null) });
      schedule.push({ time: Math.round(babSuresi * 1000), action: () => autoFlipToNextBab() });
    } else {
      // Giriş cümlesi yoksa doğrudan 1. Esma başlar
      const esma1T = 300;
      for (let i = 0; i < itemCount; i++) {
        const id = i + 1;
        schedule.push({ time: esma1T + (i * esmaStep), action: () => highlightItem(id) });
      }
      const esmaEndT = esma1T + (itemCount * esmaStep);
      schedule.push({ time: esmaEndT, action: () => highlightItem(null) });
      const refrainT = esmaEndT + 2500;
      schedule.push({ time: refrainT, action: () => highlightItem('refrain') });
      schedule.push({ time: Math.round(babSuresi * 1000) - 1000, action: () => highlightItem(null) });
      schedule.push({ time: Math.round(babSuresi * 1000), action: () => autoFlipToNextBab() });
    }
  }

  schedule.forEach(item => {
    const t = setTimeout(item.action, item.time);
    highlightTimeouts.push(t);
  });
}

// Bir babın sesi/vurgulaması bitince otomatik sonraki baba geç
function autoFlipToNextBab() {
  if (!isAudioPlaying) return;
  if (currentBabIndex < cevsanData.length - 1) {
    const prevInfo = getBabAudioInfo(currentBabIndex);
    currentBabIndex++;
    const newInfo = getBabAudioInfo(currentBabIndex);
    const sameFile = (prevInfo.bolumNo === newInfo.bolumNo);
    // Sayfayı çevir; aynı ses dosyasındaysak ses doğal akışında kesintisiz devam eder
    renderBab(currentBabIndex, 'next', sameFile);
  } else {
    stopAudio();
  }
}

function stopHighlightTracker() {
  if (highlightTimeouts && highlightTimeouts.length > 0) {
    highlightTimeouts.forEach(t => clearTimeout(t));
    highlightTimeouts = [];
  }
  if (highlightInterval) {
    clearInterval(highlightInterval);
    highlightInterval = null;
  }
  highlightItem(null);
}

function playCurrentBabAudio(seekToBab = true) {
  isAudioPlaying = true;
  updateAudioBtnUI(true);

  const info = getBabAudioInfo(currentBabIndex);
  startHighlightTracker();

  const seekMs = seekToBab ? (info.offsetSec * 1000) : 0;

  // 1. Android Yerel Köprü (Doğrudan ilgili saniyeye sararak başlatır)
  if (window.AndroidTTS && typeof window.AndroidTTS.playLocalAudio === 'function') {
    try {
      window.AndroidTTS.playLocalAudio("public/" + info.audioSrc, seekMs);
      return;
    } catch (e) {}
  }

  // 2. HTML5 Web Audio Fallback
  try {
    globalAudio.pause();
    globalAudio.src = info.audioSrc;
    globalAudio.currentTime = seekMs / 1000;
    globalAudio.play().then(() => {
      isAudioPlaying = true;
      updateAudioBtnUI(true);
    }).catch(() => {});
  } catch (e) {}
}

function stopAudio() {
  isAudioPlaying = false;
  stopHighlightTracker();

  // Android Yerel Köprüyü kesin olarak durdur
  if (window.AndroidTTS && typeof window.AndroidTTS.stop === 'function') {
    try {
      window.AndroidTTS.stop();
    } catch (e) {}
  }
  if (globalAudio) {
    try {
      globalAudio.pause();
      globalAudio.currentTime = 0;
    } catch (e) {}
  }
  updateAudioBtnUI(false);
}

// Android yerel ses bittiğinde tetiklenecek fonksiyon
window.onNativeAudioFinished = function() {
  stopHighlightTracker();
  if (currentBabIndex < cevsanData.length - 1) {
    currentBabIndex++;
    renderBab(currentBabIndex, 'next');
  } else {
    stopAudio();
  }
};

globalAudio.addEventListener("ended", () => {
  stopHighlightTracker();
  if (currentBabIndex < cevsanData.length - 1) {
    currentBabIndex++;
    renderBab(currentBabIndex, 'next');
  } else {
    stopAudio();
  }
});

let lastAudioToggleTime = 0;
function toggleAudioPlayback(e) {
  const now = Date.now();
  if (now - lastAudioToggleTime < 500) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    return;
  }
  lastAudioToggleTime = now;

  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  requestWakeLock();
  if (isAudioPlaying) {
    stopAudio();
  } else {
    playCurrentBabAudio();
  }
}

if (audioToggleBtn) {
  audioToggleBtn.addEventListener("click", toggleAudioPlayback);
  audioToggleBtn.addEventListener("touchend", toggleAudioPlayback);
}


if (prevBabBtn) {
  prevBabBtn.addEventListener("click", () => {
    if (currentBabIndex > 0) {
      currentBabIndex--;
      renderBab(currentBabIndex, 'prev');
    }
  });
}

if (nextBabBtn) {
  nextBabBtn.addEventListener("click", () => {
    if (currentBabIndex < cevsanData.length - 1) {
      currentBabIndex++;
      renderBab(currentBabIndex, 'next');
    }
  });
}

// Mobil Görünüm Sekmeleri (Karşılıklı / Sadece Arapça / Sadece Meal)
let currentMobileView = 'both';
const mobileTabs = document.querySelectorAll(".mobile-view-tabs .tab-btn");
function handleTabSwitch(btn, e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  mobileTabs.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentMobileView = btn.getAttribute("data-view");
  applyMobileViewLayout();
}

mobileTabs.forEach(btn => {
  btn.addEventListener("click", (e) => handleTabSwitch(btn, e));
  btn.addEventListener("touchend", (e) => handleTabSwitch(btn, e));
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
        currentBabIndex++;
        renderBab(currentBabIndex, 'next');
      }
    } else {
      // Parmağı sağa kaydırdı -> Önceki sayfaya/baba git
      if (currentBabIndex > 0) {
        currentBabIndex--;
        renderBab(currentBabIndex, 'prev');
      }
    }
  }
}, { passive: true });

// Başlangıç render
renderBab(currentBabIndex);

// ============================================================
// AYARLAR PANELİ JS (Seslendirme + Hat Seçimi)
// ============================================================
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');

function openSettings() {
  if (settingsPanel) settingsPanel.classList.remove('hidden');
}
function closeSettings() {
  if (settingsPanel) settingsPanel.classList.add('hidden');
}

if (settingsBtn) {
  settingsBtn.addEventListener('click', openSettings);
  settingsBtn.addEventListener('touchend', (e) => { e.preventDefault(); openSettings(); });
}
if (settingsCloseBtn) {
  settingsCloseBtn.addEventListener('click', closeSettings);
  settingsCloseBtn.addEventListener('touchend', (e) => { e.preventDefault(); closeSettings(); });
}
if (settingsPanel) {
  settingsPanel.addEventListener('click', (e) => {
    if (e.target === settingsPanel) closeSettings();
  });
}


// --- Hat (Yazı Tipi) seçimi ---
function applyArabicFont(fontName) {
  currentArabicFont = fontName;
  const selector = '.arabic-text, .arabic-bismillah, .arabic-opening, #refrainArText, .arabic-header-title';
  document.querySelectorAll(selector).forEach(el => {
    el.style.fontFamily = `'${fontName}', serif`;
  });
  document.querySelectorAll('.hat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-font') === fontName);
  });
}

document.querySelectorAll('.hat-btn').forEach(btn => {
  const handler = (e) => {
    e.preventDefault();
    applyArabicFont(btn.getAttribute('data-font'));
    closeSettings();
  };
  btn.addEventListener('click', handler);
  btn.addEventListener('touchend', handler);
});
