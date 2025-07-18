import 'package:get/get.dart';
import 'package:ludonew/routes/conssiste.dart';
import 'package:ludonew/ui/dashboard/account/about/about.dart';
import 'package:ludonew/ui/dashboard/account/ads/ads.dart';
import 'package:ludonew/ui/dashboard/account/cancellation_policy/cancellation_policy.dart';
import 'package:ludonew/ui/dashboard/account/faqs/faqs.dart';
import 'package:ludonew/ui/dashboard/account/help/help.dart';
import 'package:ludonew/ui/dashboard/account/my_balance/transaction_history/transaction_history.dart';
import 'package:ludonew/ui/dashboard/account/my_profile.dart/daily_win/daily_win.dart';
import 'package:ludonew/ui/dashboard/account/my_profile.dart/edit_profile.dart';
import 'package:ludonew/ui/dashboard/account/my_profile.dart/weekly_win/weekly_win.dart';
import 'package:ludonew/ui/dashboard/account/privacy_policy/privacy_policy.dart';
import 'package:ludonew/ui/dashboard/account/refund_policy/refund_policy.dart';
import 'package:ludonew/ui/dashboard/account/terms_and_condition/terms_and_conditions.dart';
import 'package:ludonew/ui/splash/splashB.dart';
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
  static const String transactionHistory = "/transactionHistory";
  static const String faqs = "/faqs";
  static const String privacyPolicy = "/privacyPolicy";
  static const String termsAndConditions = "/termsAndConditions";
  static const String about = "/about";
  static const String refundPolicy = "/refundPolicy";
  static const String cancelPolicy = "/cancelPolicy";
  static const String editProfile = "/editProfile";
  static const String help = "/help";
  static const String splashAnimationScreen = "/splashAnimationScreen";
  static const String ads = "/ads";
  static const String weeklyWin = "/weeklyWin";
  static const String dailyWin = "/dailyWin";

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
      name: splashAnimationScreen,
      page: () => SplashAnimationScreen(),
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
    // GetPage(
    //   name: joined,
    //   page: () => Joined(),
    //   transitionDuration:
    //       const Duration(milliseconds: ApiConstants.screenTransitionTime),
    // ),
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
    GetPage(
      name: transactionHistory,
      page: () => TransactionHistory(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: faqs,
      page: () => FAQ(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: privacyPolicy,
      page: () => PrivacyPolicy(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: termsAndConditions,
      page: () => TermsAndConditions(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: about,
      page: () => About(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: refundPolicy,
      page: () => RefundPolicy(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: cancelPolicy,
      page: () => CancelPolicy(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: editProfile,
      page: () => EditProfile(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: help,
      page: () => Help(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: ads,
      page: () => Ads(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: dailyWin,
      page: () => DailyWin(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
    GetPage(
      name: weeklyWin,
      page: () => WeeklyWin(),
      transition: Transition.fadeIn,
      transitionDuration:
          const Duration(milliseconds: ApiConstants.screenTransitionTime),
    ),
  ];
}
