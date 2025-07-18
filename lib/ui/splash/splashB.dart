import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/util/constant/images_path.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SplashAnimationScreen extends StatefulWidget {
  @override
  _SplashAnimationScreenState createState() => _SplashAnimationScreenState();
}

class _SplashAnimationScreenState extends State<SplashAnimationScreen>
    with TickerProviderStateMixin {
  late AnimationController _logoController;
  late Animation<Offset> _logoAnimation;

  late AnimationController _textController;
  late Animation<double> _textFade;

  late AnimationController _bottomFadeController;
  late Animation<double> _bottomFade;

  @override
  void initState() {
    super.initState();

    // Logo drop animation
    _logoController = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );

    _logoAnimation = Tween<Offset>(
      begin: Offset(0.0, -2.0),
      end: Offset(0.0, 0.0),
    ).animate(CurvedAnimation(
      parent: _logoController,
      curve: Curves.bounceOut,
    ));

    // Text fade animation
    _textController = AnimationController(
      duration: Duration(milliseconds: 1000),
      vsync: this,
    );

    _textFade = CurvedAnimation(
      parent: _textController,
      curve: Curves.easeIn,
    );

    // Bottom image fade animation
    _bottomFadeController = AnimationController(
      duration: Duration(milliseconds: 1000),
      vsync: this,
    );

    _bottomFade = CurvedAnimation(
      parent: _bottomFadeController,
      curve: Curves.easeIn,
    );

    // Animation flow: Logo → Text → Bottom
    _logoController.forward().then((_) {
      _textController.forward().then((_) {
        _bottomFadeController.forward().then((_) {
          Future.delayed(Duration(seconds: 1), () {
            Get.offAndToNamed(Routes.mobile);
            // _loadTokenAndNavigate();
          });
        });
      });
    });
  }

  // Future<void> _loadTokenAndNavigate() async {
  //   final prefs = await SharedPreferences.getInstance();
  //   final token = prefs.getString('token');
  //   if (token != null && token.isNotEmpty) {
  //     print('Token::::::::::${token}');
  //     Get.offAndToNamed(Routes.dasboard);
  //   } else {
  //     Get.offAndToNamed(Routes.mobile);
  //   }
  // }

  @override
  void dispose() {
    _logoController.dispose();
    _textController.dispose();
    _bottomFadeController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            Image.asset(
              ImagePath.splashBackground,
              width: double.infinity,
              height: double.infinity,
              fit: BoxFit.cover,
            ),

            /// 🍀 Dice drop animation
            SlideTransition(
              position: _logoAnimation,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(width: 100),
                  Image.asset(
                    'assets/images/diceS.png',
                    width: 100,
                    height: 100,
                  ),
                ],
              ),
            ),

            /// ✨ Text fade-in
            FadeTransition(
              opacity: _textFade,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SizedBox(height: 40),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Text(
                        'LAZI',
                        style: FontConstant.styleBold(
                          fontSize: 56,
                          color: AppColors.secondaryColor,
                        ),
                      ),
                      SizedBox(width: 120),
                    ],
                  ),
                  SizedBox(height: 15),
                  Text(
                    'LAZIO INDUSTRIES PVT LTD',
                    style: FontConstant.styleSemiBold(
                      fontSize: 18,
                      color: AppColors.black,
                    ),
                  ),
                ],
              ),
            ),

            /// 🎉 Bottom image fade-in after text
            Positioned(
              bottom: 30,
              child: FadeTransition(
                opacity: _bottomFade,
                child: Image.asset(
                  ImagePath.splashbottom,
                  height: 100,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
