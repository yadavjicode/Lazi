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
    'assets/images/ludo.gif',
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
    final double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: AppColors.primaryColor,
      body: Center(
        child: Image.asset(
          imagePaths[currentFrame],
          width: screenWidth * 0.5,
          height: screenWidth * 0.5,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
