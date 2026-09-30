import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const CevsenApp());
}

class CevsenApp extends StatelessWidget {
  const CevsenApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cevşen-ül Kebir',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        primaryColor: const Color(0xFF6B141B),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6B141B),
          primary: const Color(0xFF6B141B),
          secondary: const Color(0xFFC5A059),
        ),
        textTheme: GoogleFonts.cormorantGaramondTextTheme(),
      ),
      home: const CevsenHomeScreen(),
    );
  }
}

class CevsenHomeScreen extends StatefulWidget {
  const CevsenHomeScreen({super.key});

  @override
  State<CevsenHomeScreen> createState() => _CevsenHomeScreenState();
}

class _CevsenHomeScreenState extends State<CevsenHomeScreen> {
  bool isBookOpened = false;
  String selectedReader = "İsmail Biçer (Klasik & Vakur Tilavet)";
  int activeBabIndex = 0;
  int? highlightedItemId;
  bool isPlaying = false;

  final List<String> readerOptions = [
    "İsmail Biçer (Klasik & Vakur Tilavet)",
    "İshak Danış (Açık & Berrak Okuyuş)",
    "Prof. Dr. Fatih Çollak (Diyanet Usulü)",
    "Türkçe Meal Seslendirmesi (Tane Tane Anlam)",
    "Arapça Oku + Türkçe Meal (Birlikte Takip)",
    "Cihaz Sesi (TTS - Canlı Takip)",
  ];

  final List<Map<String, dynamic>> babList = [
    {
      "bab": 1,
      "intro": "Ey benim ve hadsiz mevcudatın kudret ve azametli Hâlık ve Rezzakı olan Rabb-i Kerimim; senin doksan dokuz esma-i hüsna ve bine baliğ olan sıfat-ı celile ve cemileni ba's-ı rahmet ve vesile-i necat bilerek sen Azîmü'ş-Şan'dan niyaz ediyorum;",
      "items": [
        {"id": 1, "ar": "يَا اَللّٰهُ", "tr": "Yâ Allâh", "mean": "Ey her şeyin gerçek mâbûdu olan Allah"},
        {"id": 2, "ar": "يَا رَحْمٰنُ", "tr": "Yâ Rahmân", "mean": "Ey dünyada yarattıklarının hepsine merhamet eden"},
        {"id": 3, "ar": "يَا رَحِيمُ", "tr": "Yâ Rahîm", "mean": "Ey ahirette sadece müminlere nihayetsiz lütufta bulunan"},
        {"id": 4, "ar": "يَا عَلِيمُ", "tr": "Yâ Alîm", "mean": "Ey her şeyi hakkıyla ve bütün incelikleriyle bilen"},
        {"id": 5, "ar": "يَا حَلِيمُ", "tr": "Yâ Halîm", "mean": "Ey cezalandırmakta acele etmeyip mühlet tanıyan"},
        {"id": 6, "ar": "يَا عَظِيمُ", "tr": "Yâ Azîm", "mean": "Ey sonsuz büyüklük ve azamet sahibi"},
        {"id": 7, "ar": "يَا حَكِيمُ", "tr": "Yâ Hakîm", "mean": "Ey her işi hikmetli ve faydalı olan"},
        {"id": 8, "ar": "يَا قَدِيمُ", "tr": "Yâ Kadîm", "mean": "Ey varlığının başlangıcı olmayan ezeli Zat"},
        {"id": 9, "ar": "يَا مُقِيمُ", "tr": "Yâ Mukîm", "mean": "Ey bütün varlığı ayakta tutan ve devam ettiren"},
        {"id": 10, "ar": "يَا كَرِيمُ", "tr": "Yâ Kerîm", "mean": "Ey lütuf ve ihsanı bol, keremi nihayetsiz olan"}
      ],
      "refrainAr": "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
      "refrainTr": "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
    },
    {
      "bab": 2,
      "intro": "Ey mülkün yegâne mâliki ve izzet sahibi Rabbim! Her türlü noksanlıktan münezzeh kemâl sıfatlarınla Senden emân diliyorum;",
      "items": [
        {"id": 1, "ar": "يَا سَيِّدَ السَّادَاتِ", "tr": "Yâ Seyyide's-sâdât", "mean": "Ey efendilerin Efendisi ve bütün seyyidlerin Rabbi"},
        {"id": 2, "ar": "يَا مُجِيبَ الدَّعَوَاتِ", "tr": "Yâ Mûcîbe'd-da'avât", "mean": "Ey bütün içten dualara icabet edip kabul buyuran"},
        {"id": 3, "ar": "يَا رَافِعَ الدَّرَجَاتِ", "tr": "Yâ Râfia'd-deracât", "mean": "Ey şan ve dereceleri yükselten"},
        {"id": 4, "ar": "يَا وَلِيَّ الْحَسَنَاتِ", "tr": "Yâ Veliyye'l-hasenât", "mean": "Ey bütün iyilik ve güzelliklerin gerçek sahibi"},
        {"id": 5, "ar": "يَا غَافِرَ الْخَط۪يٓئَاتِ", "tr": "Yâ Gâfire'l-hatî'ât", "mean": "Ey günah ve kusurları bağışlayan afüvv Zat"}
      ],
      "refrainAr": "سُبْحَانَكَ يَا لَٓا اِلٰهَ اِلَّٓا اَنْتَ اَلْاَمَانَ اَلْاَمَانَ خَلِّصْنَا مِنَ النَّارِ",
      "refrainTr": "Bütün kusurlardan münezzehsin, Senden başka ilâh yoktur! Bize emân ver, emân ver, bizi Cehennem ateşinden kurtar!"
    }
  ];

  void _showReaderSelectionModal() {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFFFBF8F0),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (ctx) {
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const Icon(Icons.record_voice_over_rounded, color: Color(0xFFC5A059)),
                  const SizedBox(width: 10),
                  Text(
                    "Ses & Kıraat Tercihi",
                    style: GoogleFonts.cormorantGaramond(
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                      color: const Color(0xFF1B3B2B),
                    ),
                  ),
                ],
              ),
              const Divider(color: Color(0xFFD6C8A8), height: 20),
              ...readerOptions.map((reader) {
                final bool isSelected = (reader == selectedReader);
                return ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(
                    isSelected ? Icons.check_circle_rounded : Icons.radio_button_unchecked,
                    color: isSelected ? const Color(0xFF1B3B2B) : Colors.grey,
                  ),
                  title: Text(
                    reader,
                    style: TextStyle(
                      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
                      color: const Color(0xFF2C2C2C),
                      fontSize: 14,
                    ),
                  ),
                  onTap: () {
                    setState(() {
                      selectedReader = reader;
                    });
                    Navigator.pop(ctx);
                  },
                );
              }),
            ],
          ),
        );
      },
    );
  }

  void _simulatePlayback() async {
    if (isPlaying) {
      setState(() {
        isPlaying = false;
        highlightedItemId = null;
      });
      return;
    }

    setState(() {
      isPlaying = true;
    });

    final currentBab = babList[activeBabIndex];
    final List items = currentBab["items"];

    for (int i = 0; i < items.length; i++) {
      if (!isPlaying) break;
      setState(() {
        highlightedItemId = items[i]["id"];
      });
      await Future.delayed(const Duration(seconds: 3));
    }

    if (mounted) {
      setState(() {
        isPlaying = false;
        highlightedItemId = null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!isBookOpened) {
      return _buildCoverView();
    }
    return _buildBookReadingView();
  }

  // UYGULAMA KAPAĞI
  Widget _buildCoverView() {
    return Scaffold(
      backgroundColor: const Color(0xFF0F1A15),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Kapak Çerçevesi
              Container(
                width: 320,
                height: 480,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.6),
                      blurRadius: 25,
                      offset: const Offset(0, 15),
                    ),
                    BoxShadow(
                      color: const Color(0xFFC5A059).withOpacity(0.2),
                      blurRadius: 10,
                    ),
                  ],
                  border: Border.all(color: const Color(0xFFC5A059), width: 3),
                  image: const DecorationImage(
                    image: AssetImage('assets/images/cover.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              const SizedBox(height: 28),
              Text(
                "CEVŞEN-ÜL KEBİR",
                style: GoogleFonts.cinzel(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 2,
                  color: const Color(0xFFE8D49E),
                ),
              ),
              const SizedBox(height: 8),
              Text(
                "Münâcât-ı Peygamberî (A.S.M)",
                style: GoogleFonts.cormorantGaramond(
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                  color: const Color(0xFFA3B899),
                ),
              ),
              const SizedBox(height: 24),
              // Ses Ayarı Butonu
              OutlinedButton.icon(
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFFE8D49E),
                  side: const BorderSide(color: Color(0xFFC5A059)),
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                ),
                onPressed: _showReaderSelectionModal,
                icon: const Icon(Icons.settings_voice_rounded, size: 20),
                label: const Text(
                  "Ses & Kıraat Ayarları",
                  style: TextStyle(fontSize: 14),
                ),
              ),
              const SizedBox(height: 32),
              // Kitabı Aç Butonu
              ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFC5A059),
                  foregroundColor: const Color(0xFF1B3B2B),
                  padding: const EdgeInsets.symmetric(horizontal: 36, vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  elevation: 6,
                ),
                onPressed: () {
                  setState(() {
                    isBookOpened = true;
                  });
                },
                icon: const Icon(Icons.menu_book_rounded, size: 22),
                label: const Text(
                  "Cevşen'i Aç ve Oku",
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // ÇİFT SAYFALI / KİTAP GÖRÜNÜMÜ
  Widget _buildBookReadingView() {
    final currentBab = babList[activeBabIndex];
    final items = currentBab["items"] as List;

    return Scaffold(
      backgroundColor: const Color(0xFFEDE6D6),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1B3B2B),
        foregroundColor: const Color(0xFFE8D49E),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new_rounded),
          onPressed: () {
            setState(() {
              isBookOpened = false;
              isPlaying = false;
              highlightedItemId = null;
            });
          },
        ),
        title: Text(
          "Cevşen-ül Kebir • Bab ${currentBab['bab']}",
          style: GoogleFonts.cinzel(fontWeight: FontWeight.bold, fontSize: 18),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.record_voice_over_rounded),
            tooltip: "Seslendirici Değiştir",
            onPressed: _showReaderSelectionModal,
          ),
        ],
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
        decoration: BoxDecoration(
          color: const Color(0xFF1B3B2B),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2),
              blurRadius: 8,
              offset: const Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            IconButton(
              icon: const Icon(Icons.arrow_back_rounded, color: Color(0xFFE8D49E)),
              onPressed: activeBabIndex > 0
                  ? () {
                      setState(() {
                        activeBabIndex--;
                        highlightedItemId = null;
                      });
                    }
                  : null,
            ),
            ElevatedButton.icon(
              style: ElevatedButton.styleFrom(
                backgroundColor: isPlaying ? Colors.amber.shade700 : const Color(0xFFC5A059),
                foregroundColor: const Color(0xFF1B3B2B),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              ),
              onPressed: _simulatePlayback,
              icon: Icon(isPlaying ? Icons.pause_rounded : Icons.play_arrow_rounded),
              label: Text(
                isPlaying ? "Durdur" : "Seslendir & Takip Et",
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
            IconButton(
              icon: const Icon(Icons.arrow_forward_rounded, color: Color(0xFFE8D49E)),
              onPressed: activeBabIndex < babList.length - 1
                  ? () {
                      setState(() {
                        activeBabIndex++;
                        highlightedItemId = null;
                      });
                    }
                  : null,
            ),
          ],
        ),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          final isWideScreen = constraints.maxWidth > 800;

          if (isWideScreen) {
            // Masaüstü / Tablet Çift Sayfa
            return Row(
              children: [
                Expanded(child: _buildLeftPage(currentBab, items)),
                Container(
                  width: 2,
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Colors.transparent, Color(0xFF8C7A58), Colors.transparent],
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                    ),
                  ),
                ),
                Expanded(child: _buildRightPage(currentBab, items)),
              ],
            );
          } else {
            // Mobil Tek Sayfa
            return SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  _buildRightPage(currentBab, items),
                  const Divider(color: Color(0xFFC5A059), height: 32),
                  _buildLeftPage(currentBab, items),
                ],
              ),
            );
          }
        },
      ),
    );
  }

  // Sol Sayfa (Türkçe Meali ve Niyaz) - Tezhip & Desenli Çerçeveli
  Widget _buildLeftPage(Map<String, dynamic> bab, List items) {
    return Container(
      color: const Color(0xFFF9F5EA),
      padding: const EdgeInsets.all(16),
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFAF7F0),
          border: Border.all(color: const Color(0xFFC5A059), width: 2),
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFFC5A059).withOpacity(0.15),
              spreadRadius: 2,
              blurRadius: 4,
            ),
          ],
        ),
        padding: const EdgeInsets.all(18),
        child: ListView(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text("✤", style: TextStyle(color: Color(0xFFC5A059), fontSize: 18)),
                Text("Tercüme & İzah", style: TextStyle(fontFamily: 'serif', color: Color(0xFF8C7A58), fontWeight: FontWeight.bold)),
                Text("✤", style: TextStyle(color: Color(0xFFC5A059), fontSize: 18)),
              ],
            ),
            const Divider(color: Color(0xFFD6C8A8), height: 16),
            Text(
              bab["intro"],
              style: const TextStyle(fontSize: 16, height: 1.6, color: Color(0xFF333333)),
            ),
          const SizedBox(height: 20),
          ...items.map((item) {
            final isHighlighted = highlightedItemId == item["id"];
            return AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: isHighlighted ? const Color(0xFFFFF2D6) : Colors.transparent,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: isHighlighted ? const Color(0xFFC5A059) : Colors.transparent,
                ),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "${item['id']}. ",
                    style: const TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF1B3B2B)),
                  ),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          item["reading"],
                          style: const TextStyle(
                            fontStyle: FontStyle.italic,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF4A4A4A),
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          item["mean"],
                          style: const TextStyle(fontSize: 14, color: Color(0xFF222222)),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          }),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFE9F0EC),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFF1B3B2B).withOpacity(0.3)),
            ),
            child: Text(
              bab["refrainTr"],
              style: const TextStyle(
                fontStyle: FontStyle.italic,
                fontWeight: FontWeight.bold,
                color: Color(0xFF1B3B2B),
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

  // Sağ Sayfa (Orijinal Arapça Metin) - Tezhip & Desenli Çerçeveli
  Widget _buildRightPage(Map<String, dynamic> bab, List items) {
    return Container(
      color: const Color(0xFFFAF6EE),
      padding: const EdgeInsets.all(16),
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFAF7F0),
          border: Border.all(color: const Color(0xFFC5A059), width: 2),
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFFC5A059).withOpacity(0.15),
              spreadRadius: 2,
              blurRadius: 4,
            ),
          ],
        ),
        padding: const EdgeInsets.all(18),
        child: ListView(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Bab #${bab['bab']}",
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF7A6A4B),
                ),
              ),
              Text(
                "Cevşen-ül Kebir",
                style: GoogleFonts.cinzel(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: const Color(0xFF1B3B2B),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Center(
            child: Text(
              "جَوْشَنُ الْكَبِيرِ",
              style: GoogleFonts.amiri(fontSize: 26, fontWeight: FontWeight.bold, color: const Color(0xFF1B3B2B)),
            ),
          ),
          const SizedBox(height: 12),
          Center(
            child: Text(
              "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ",
              style: GoogleFonts.amiri(
                fontSize: 24,
                color: const Color(0xFF8C2D19),
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const Divider(color: Color(0xFFD6C8A8), height: 28),
          Center(
            child: Text(
              "اَللّٰهُمَّ اِنّ۪ى اَسْئَلُكَ بِاَسْمَٓائِكَ",
              style: GoogleFonts.amiri(fontSize: 22, color: const Color(0xFF1B3B2B)),
            ),
          ),
          const SizedBox(height: 16),
          // İsimler Listesi
          ...items.map((item) {
            final isHighlighted = highlightedItemId == item["id"];
            return AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
              decoration: BoxDecoration(
                color: isHighlighted ? const Color(0xFFFFF2D6) : Colors.transparent,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(
                  color: isHighlighted ? const Color(0xFFC5A059) : Colors.transparent,
                  width: 1.5,
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center, // ORTALI
                children: [
                  Icon(
                    Icons.star,
                    size: 14,
                    color: isHighlighted ? const Color(0xFFD32F2F) : const Color(0xFF8C7A58),
                  ),
                  const SizedBox(width: 10),
                  Text(
                    item["ar"],
                    style: GoogleFonts.amiri(
                      fontSize: 28,
                      color: isHighlighted ? const Color(0xFFD32F2F) : const Color(0xFF2C2C2C), // OKUNAN YERLER KIRMIZI
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                    textDirection: TextDirection.rtl,
                  ),
                  const SizedBox(width: 10),
                  Icon(
                    Icons.star,
                    size: 14,
                    color: isHighlighted ? const Color(0xFFD32F2F) : const Color(0xFF8C7A58),
                  ),
                ],
              ),
            );
          }),
          const SizedBox(height: 20),
          // Nakarat Duası
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: const Color(0xFFF1EAE0),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFC5A059)),
            ),
            child: Text(
              bab["refrainAr"],
              style: GoogleFonts.amiri(
                fontSize: 22,
                color: const Color(0xFF8C2D19),
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
              textDirection: TextDirection.rtl,
            ),
          ),
        ],
      ),
    ),
  );
}
}
