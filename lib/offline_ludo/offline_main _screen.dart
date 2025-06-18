import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

class FirstScreen extends StatefulWidget {
  const FirstScreen({super.key});

  @override
  State<FirstScreen> createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final InAppLocalhostServer localhostServer = InAppLocalhostServer();
  late InAppWebViewController webViewController;
  String? token = '';

  @override
  void initState() {
    super.initState();
    _startServer();
  }

  Future<void> _startServer() async {
    await localhostServer.start();

    setState(() {}); // to trigger build
    final prefs = await SharedPreferences.getInstance();
    token = prefs.getString('token');
  }

  @override
  void dispose() {
    localhostServer.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: InAppWebView(
        initialUrlRequest: URLRequest(
          url: WebUri("http://localhost:8080/assets/info/file.html"),
        ),
        initialOptions: InAppWebViewGroupOptions(
          crossPlatform: InAppWebViewOptions(
            javaScriptEnabled: true,
          ),
        ),
        onWebViewCreated: (controller) {
          webViewController = controller;
        },
        onLoadStop: (controller, url) async {
  await controller.evaluateJavascript(source: '''
    // ✅ Define setCookie function
    function setCookie(name, value, days = 1) {
      const maxAge = 60 * 60 * 24 * days;
      document.cookie = name + '=' + value + '; path=/; max-age=' + maxAge;
    }

    // ✅ Ensure window.awebapp is set
    if (!window.awebapp) {
      window.awebapp = {
        itspro: function(value) {
          window.flutter_inappwebview.callHandler('Android', 'itspro:' + value);
        }
      };
    }

    // ✅ Store token and use it
    const token = "$token";
    setCookie("userToken", token);
    showName(token); // Call JS function from HTML
  ''');
},

  //       onLoadStop: (controller, url) async {
  //         await controller.evaluateJavascript(source: '''
  //   if (!window.awebapp) {
  //     window.awebapp = {
  //       itspro: function(value) {
  //         window.flutter_inappwebview.callHandler('Android', 'itspro:' + value);
  //       }
  //     };
  //   }
 
  //   // ✅ Call the function to show name on page load
  //   showName("$token");
  // ''');
  //       },
        onConsoleMessage: (controller, message) {
          print("Console log: ${message.message}");
        },
        onLoadError: (controller, url, code, message) {
          print("Error loading: $message");
        },
        onLoadHttpError: (controller, url, statusCode, description) {
          print("HTTP error: $statusCode $description");
        },
      ),
    );
  }
}
