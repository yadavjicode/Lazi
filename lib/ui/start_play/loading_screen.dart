import 'dart:async';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/ludo/main_screen.dart';
import 'package:ludonew/offline_ludo/offline_main%20_screen.dart';
import 'package:ludonew/routes/conssiste.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';

class LoadingScreen extends StatefulWidget {
  @override
  State<LoadingScreen> createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  Timer? _dotTimer;
  int _dotCount = 0; // for the "..." animation

  @override
  void initState() {
    super.initState();

    // 1) Progress‐bar animation from 0 → 1 over 3 seconds
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 3),
    )..forward();

    // When the progress finishes, go to NextScreen()
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        //  Get.to(MainScreen());
        Get.to(FirstScreen(),
            duration: Duration(milliseconds: ApiConstants.screenTransitionTime),
            transition: Transition.rightToLeft);
      }
    });

    // 2) Animate the dots every 500ms
    _dotTimer = Timer.periodic(Duration(milliseconds: 500), (_) {
      setState(() {
        _dotCount = (_dotCount + 1) % 4; // cycles 0,1,2,3
      });
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    _dotTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenW = MediaQuery.of(context).size.width;

    return Scaffold(
      body: Stack(
        children: [
          // Full‐screen background image
          SizedBox.expand(
            child: Image.asset(
              ImagePath.loadingScreen, // ← your bg asset
              fit: BoxFit.cover,
            ),
          ),

          // Centered loading UI
          Positioned(
            bottom: 40,
            left: 0,
            right: 0,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // 3) Custom progress bar
                AnimatedBuilder(
                  animation: _controller,
                  builder: (context, _) {
                    return Container(
                      width: screenW * 0.8,
                      height: 12,
                      decoration: BoxDecoration(
                        color: Colors.red.shade900, // empty track
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: FractionallySizedBox(
                        alignment: Alignment.centerLeft,
                        widthFactor: _controller.value, // 0→1
                        child: Container(
                          decoration: BoxDecoration(
                            color: Colors.yellow.shade700, // filled bar
                            borderRadius: BorderRadius.circular(6),
                          ),
                        ),
                      ),
                    );
                  },
                ),

                SizedBox(height: 16),

                // 4) LOADING + animated dots
                Text('LOADING${'.' * _dotCount}',
                    style: FontConstant.styleBold(
                        fontSize: 18, color: AppColors.white)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
