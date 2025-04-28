import 'dart:async';
import 'package:flutter/material.dart';
import 'package:ludonew/ui/splash/splashB.dart';
import 'package:ludonew/util/constant/contant_color.dart';

class SplashA extends StatefulWidget {
  @override
  State<SplashA> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashA> {
  int currentFrame = 0;
  List<String> imagePaths = [
    'assets/images/splashA.png',
    'assets/images/splashB.png',
    'assets/images/splashC.png',
    'assets/images/splashD.png',
    'assets/images/splashE.png',
    'assets/images/splashF.png',
  ];

  @override
  void initState() {
    super.initState();
    Timer.periodic(Duration(milliseconds: 300), (timer) {
      setState(() {
        currentFrame = (currentFrame + 1) % imagePaths.length;
      });
    });

    Timer(Duration(seconds: 3), () {
      // Navigate after animation
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => SplashAnimationScreen()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primaryColor,
      body: Center(
        child: Image.asset(
          imagePaths[currentFrame],
          width: double.infinity,
          height: double.infinity,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
