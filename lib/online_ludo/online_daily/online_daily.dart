import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/profile_controller.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:webview_flutter/webview_flutter.dart';

class OnlineDaily extends StatefulWidget {
  final String userId;
  final String name;
  final String tournamentId;

  OnlineDaily(
      {super.key,
      required this.userId,
      required this.name,
      required this.tournamentId});

  @override
  State<OnlineDaily> createState() => _OnlineDailyState();
}

class _OnlineDailyState extends State<OnlineDaily> {
  final ProfileController profileController = Get.put(ProfileController());
  final RxBool isLoading = true.obs;
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    print(
        "user Id ${widget.userId} name ${widget.name} tournament id ${widget.tournamentId}");
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(NavigationDelegate(
        onPageStarted: (url) {
          isLoading.value = true;
        },
        onPageFinished: (url) {
          isLoading.value = false;
        },
        onWebResourceError: (error) {
          isLoading.value = false;
        },
      ))
      ..loadRequest(Uri.parse(
          "https://lazioludo.com/game/build/login/${widget.userId}/${widget.name}?tournament_types=daily&daily_tournament_id=${widget.tournamentId}&weekly_tournament_id=null&tournament_round=1"));
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
