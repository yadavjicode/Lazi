import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:shared_preferences/shared_preferences.dart';

class OnlineDaily extends StatefulWidget {
  final String noOfPlayer;
  final String tournmentId;
  final String tournmentTime;
  const OnlineDaily(
      {super.key,
      required this.noOfPlayer,
      required this.tournmentId,
      required this.tournmentTime});

  @override
  State<OnlineDaily> createState() => _OnlineDaily();
}

class _OnlineDaily extends State<OnlineDaily> {
  final InAppLocalhostServer localhostServer = InAppLocalhostServer();
  late InAppWebViewController webViewController;
  String? token = '';

  @override
  void initState() {
    super.initState();
    _startServer();
    print(
        "tournmentId ${widget.tournmentId} noOfPlayer ${widget.noOfPlayer} tournmentTime ${widget.tournmentTime}");
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
          url: WebUri("http://localhost:8080/assets/info/online-file-daily.html"),
        ),
        initialOptions: InAppWebViewGroupOptions(
          crossPlatform: InAppWebViewOptions(
            javaScriptEnabled: true,
          ),
        ),
        onWebViewCreated: (controller) {
          webViewController = controller;
          controller.addJavaScriptHandler(
            handlerName: "homeBack",
            callback: (args) {
              // 👇 Navigate to Flutter Home page
              Navigator.pushReplacementNamed(context, '/StartPlay');
              return;
            },
          );
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

            
            setCookie("userToken", "$token");
            setCookie("tournamentId", "${widget.tournmentId}");
            setCookie("noOfPlayers", "${widget.noOfPlayer}");
            setCookie("tournamentTimeInSec", "${widget.tournmentTime}");

            
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
