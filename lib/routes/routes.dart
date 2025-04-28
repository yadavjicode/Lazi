import 'package:get/get.dart';
import 'package:ludonew/routes/conssiste.dart';
import 'package:ludonew/ui/start_play/joined.dart';
import 'package:ludonew/ui/start_play/loading_screen.dart';
import 'package:ludonew/ui/start_play/start_play.dart';
import 'package:ludonew/ui/auth/language/language.dart';
import 'package:ludonew/ui/auth/mobile/mobile.dart';
import 'package:ludonew/ui/auth/otp/otp.dart';
import 'package:ludonew/ui/dashboard/dashboard.dart';
import 'package:ludonew/ui/splash/splashA.dart';
import '../ui/dashboard/account/my_balance/my_balance.dart';
import '../ui/dashboard/account/my_profile.dart/my_profile.dart';
import '../ui/dashboard/account/withdraw/withdraw.dart';

class Routes {
  static const String language = '/language';
  static const String splashA = "/splashA";
  static const String mobile = "/mobile";
  static const String otp = "/otp";
  static const String dasboard = "/dasboard";
  static const String startPlay = "/StartPlay";
  static const String joined = "/joined";
  static const String loadingScreen = "/loadingScreen";
  static const String myProfile = "/myProfile";
  static const String myBalance = "/myBalance";
  static const String withdraw = "/withdraw";

  static final List<GetPage> routes = [
    GetPage(
      name: language,
      page: () => const Language(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: splashA,
      page: () => SplashA(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: mobile,
      page: () => Mobile(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: otp,
      page: () => Otp(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: dasboard,
      page: () => Dashboard(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: startPlay,
      page: () => StartPlay(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: joined,
      page: () => Joined(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: loadingScreen,
      page: () => LoadingScreen(),
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: myProfile,
      page: () => MyProfile(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: myBalance,
      page: () => MyBalance(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: withdraw,
      page: () => Withdraw(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
  ];
}
