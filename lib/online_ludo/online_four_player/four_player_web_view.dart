import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:webview_flutter/webview_flutter.dart';

class FourPlayerWebView extends StatefulWidget {
  final String userId;
  final String name;
  final String tournamentId;
  final String offlineGameId;
  final String offlineTournamentId;
  final String profileImage;

  FourPlayerWebView(
      {super.key,
      required this.userId,
      required this.name,
      required this.tournamentId,
      required this.offlineGameId,
      required this.offlineTournamentId,
      required this.profileImage});

  @override
  State<FourPlayerWebView> createState() => _FourPlayerWebView();
}

class _FourPlayerWebView extends State<FourPlayerWebView> {
  final RxBool isLoading = true.obs;
  late final WebViewController _controller;
  final ProfileController profileController = Get.put(ProfileController());

  @override
  void initState() {
    super.initState();
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Color(0xff033578), // or any color you want
        statusBarIconBrightness:
            Brightness.light, // use Brightness.dark if background is light
      ),
    );
    // final String gameUrl =
    //     "https://lazioludo.com/game/build/login/${widget.userId}/${widget.name}"
    //     "?tournament_types=daily&daily_tournament_id=${widget.tournamentId}"
    //     "&weekly_tournament_id=null&tournament_round=${widget.round}";
    final String gameUrl =
        "https://lazioludo.com/offlinegame/build/login/${widget.userId}/${widget.name}?tournament_types=daily&player_id=${widget.userId}&player_count=4&daily_tournament_id=${widget.tournamentId}&tournament_round=1&color1&offline_game_id=${widget.offlineGameId}&offline_tournament_id=${widget.offlineTournamentId}&profile_image=https://lazioludo.com/${widget.profileImage}";
    print("web url ${gameUrl}");


    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (url) {
          isLoading.value = true;
        },
        onPageFinished: (url) async {
          isLoading.value = false;

          // Disable zoom via JS injection
          await _controller.runJavaScript('''
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(meta);
          ''');
        },
        onWebResourceError: (error) {
          isLoading.value = false;
        },
      ))
      ..loadRequest(Uri.parse(gameUrl));
  }

  @override
  void dispose() {
    print("Four Player game end");
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(
        statusBarColor: Colors.transparent, // or your app's default
        statusBarIconBrightness: Brightness.dark, // match your app theme
      ),
    );
    // profileController.profile(context);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        await profileController.profile(context); // Safe async call
        return true; // allow back navigation
      },
      child: Scaffold(
        backgroundColor: AppColors.white,
        body: SafeArea(
          child: Stack(
            children: [
              WebViewWidget(controller: _controller),
              Obx(() => isLoading.value
                  ? Center(
                      child: CircularProgressIndicator(
                        color: AppColors.primaryColor,
                      ),
                    )
                  : SizedBox()),
            ],
          ),
        ),
      ),
    );
  }
}
