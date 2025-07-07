import 'package:flutter/material.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:webview_flutter/webview_flutter.dart';

class FAQ extends StatefulWidget {
  const FAQ({super.key});

  @override
  State<FAQ> createState() => _FAQState();
}

class _FAQState extends State<FAQ> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..loadRequest(Uri.parse("https://lazioludo.com/faqs"));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        backgroundColor: AppColors.primaryColor,
        centerTitle: true,
        iconTheme: IconThemeData(
          color: AppColors.white,
        ),
        elevation: 0,
        title: Text(
          "FAQ",
          style:
              FontConstant.styleSemiBold(fontSize: 18, color: AppColors.white),
        ),
      ),
      body: WebViewWidget(controller: _controller),
    );
  }
}
