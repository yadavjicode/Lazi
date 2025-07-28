import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:webview_flutter/webview_flutter.dart';

class FourPlayerWebView extends StatefulWidget {
  final String userId;
  final String name;
  final String tournamentId;

  FourPlayerWebView({
    super.key,
    required this.userId,
    required this.name,
    required this.tournamentId,
  });

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
    // final String gameUrl =
    //     "https://lazioludo.com/game/build/login/${widget.userId}/${widget.name}"
    //     "?tournament_types=daily&daily_tournament_id=${widget.tournamentId}"
    //     "&weekly_tournament_id=null&tournament_round=${widget.round}";
    final String gameUrl =
        "https://lazioludo.com/offlinegame/build/login/1/${widget.name}?tournament_types=offline&player_id=${widget.userId}&player_count=4&tournamentId=${widget.tournamentId}&color1";

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
    profileController.profile(context);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: Stack(
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
    );
  }
}
