import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:webview_flutter/webview_flutter.dart';

class OnlineWeekly extends StatefulWidget {
  final String userId;
  final String name;
  final String tournamentId;
  final int round;

  OnlineWeekly({
    super.key,
    required this.userId,
    required this.name,
    required this.tournamentId,
    required this.round,
  });

  @override
  State<OnlineWeekly> createState() => _OnlineWeeklyState();
}

class _OnlineWeeklyState extends State<OnlineWeekly> {
  final ProfileController profileController = Get.put(ProfileController());
  final RxBool isLoading = true.obs;
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();

    final String gameUrl =
        "https://lazioludo.com/game/build/login/${widget.userId}/${widget.name}"
        "?tournament_types=weekly&daily_tournament_id=null&weekly_tournament_id=${widget.tournamentId}"
        "&tournament_round=${widget.round}";

    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (url) {
          isLoading.value = true;
        },
        onPageFinished: (url) async {
          isLoading.value = false;

          // Disable zoom using injected JavaScript
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
    print("weekly  online game end");
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
