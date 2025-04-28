import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:ludonew/routes/routes.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:provider/provider.dart';
import 'ludo/ludo_provider.dart';

main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: const FirebaseOptions(
        apiKey: "AIzaSyC5U7wfKtSvavPQBdR7rbOTeLGLiq9mTfg",
        appId: "1:762974786823:android:3d9da010be60a8a1d4e1a2",
        messagingSenderId: "762974786823",
        projectId: "ludoapp-c92b0"),
  );

  return runApp(ChangeNotifierProvider(
    create: (_) => LudoProvider()..startGame(),
    child: const Root(),
  ));
}

class Root extends StatefulWidget {
  const Root({super.key});

  @override
  State<Root> createState() => _RootState();
}

class _RootState extends State<Root> {
  @override
  void initState() {
    ///Initialize images and precache it
    SchedulerBinding.instance.addPostFrameCallback((_) {
      Future.wait([
        precacheImage(const AssetImage("assets/images/thankyou.gif"), context),
        precacheImage(const AssetImage("assets/images/board.png"), context),
        precacheImage(const AssetImage("assets/images/dice/1.png"), context),
        precacheImage(const AssetImage("assets/images/dice/2.png"), context),
        precacheImage(const AssetImage("assets/images/dice/3.png"), context),
        precacheImage(const AssetImage("assets/images/dice/4.png"), context),
        precacheImage(const AssetImage("assets/images/dice/5.png"), context),
        precacheImage(const AssetImage("assets/images/dice/6.png"), context),
        precacheImage(const AssetImage("assets/images/dice/draw.gif"), context),
        precacheImage(const AssetImage("assets/images/crown/1st.png"), context),
        precacheImage(const AssetImage("assets/images/crown/2nd.png"), context),
        precacheImage(const AssetImage("assets/images/crown/3rd.png"), context),
      ]);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
        initialRoute: Routes.splashA,
        debugShowCheckedModeBanner: false,
        getPages: Routes.routes,
        title: "Lazio",
        theme: ThemeData(
          appBarTheme: const AppBarTheme(
            backgroundColor:
                AppColors.primaryColor, // Set app bar color globally
            systemOverlayStyle: SystemUiOverlayStyle(
              statusBarColor:
                  AppColors.primaryColor, // Set status bar color globally
              statusBarIconBrightness: Brightness.light, // Light icons
            ),
          ),
        ));
  }
}
