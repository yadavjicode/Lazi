import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ludonew/controller/ads_controller.dart';
import 'package:ludonew/model/ads_model.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';
import 'package:video_player/video_player.dart';

class Ads extends StatefulWidget {
  @override
  State<Ads> createState() => _AdsState();
}

class _AdsState extends State<Ads> {
  List<UrlList> urlList = [];
  final AdsController adsController = Get.put(AdsController());

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      adsController.ads(context).then((_) {
        setState(() {
          urlList = adsController.member?.urlList ?? [];
        });
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      appBar: AppBar(
        iconTheme: IconThemeData(color: AppColors.white),
        title: Text(
          'Ad',
          style: FontConstant.styleMedium(fontSize: 18, color: AppColors.white),
        ),
        backgroundColor: AppColors.primaryColor,
      ),
      body: Obx(() {
        if (adsController.isLoading.value) {
          return Center(
            child: CircularProgressIndicator(
              color: AppColors.primaryColor,
            ),
          );
        } else {
          return SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
            child: Row(
              children: urlList.map((item) {
                return VideoPlayerItem(
                  videoUrl: "https://lazioludo.com${item.video ?? ""}",
                );
              }).toList(),
            ),
          );
        }
      }),
    );
  }
}

class VideoPlayerItem extends StatefulWidget {
  final String videoUrl;

  const VideoPlayerItem({Key? key, required this.videoUrl}) : super(key: key);

  @override
  _VideoPlayerItemState createState() => _VideoPlayerItemState();
}

class _VideoPlayerItemState extends State<VideoPlayerItem> {
  late VideoPlayerController _controller;
  bool _isInitialized = false;
  bool _isPlaying = false;
  bool _isMuted = true;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(widget.videoUrl)
      ..initialize().then((_) {
        setState(() {
          _isInitialized = true;
        });
        _controller.setLooping(true);
      });

    _controller.addListener(() {
      if (_controller.value.isPlaying != _isPlaying) {
        setState(() {
          _isPlaying = _controller.value.isPlaying;
        });
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _toggleMute() {
    setState(() {
      _isMuted = !_isMuted;
      _controller.setVolume(_isMuted ? 0 : 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 300,
      margin: const EdgeInsets.symmetric(horizontal: 8),
      child: Card(
        elevation: 4,
        child: _isInitialized
            ? AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => FullScreenVideoPlayer(
                                videoUrl: widget.videoUrl),
                          ),
                        );
                      },
                      child: VideoPlayer(_controller),
                    ),
                    // if (!_isPlaying)
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => FullScreenVideoPlayer(
                                videoUrl: widget.videoUrl),
                          ),
                        );
                      },
                      child: Container(
                        decoration: BoxDecoration(
                            color: Colors.black26, shape: BoxShape.circle),
                        child: const Icon(
                          Icons.play_arrow,
                          size: 64,
                          color: Colors.white,
                        ),
                      ),
                    ),
                    // Positioned(
                    //   top: 8,
                    //   right: 8,
                    //   child: IconButton(
                    //     icon: Icon(
                    //       _isMuted ? Icons.volume_off : Icons.volume_up,
                    //       color: Colors.white,
                    //     ),
                    //     onPressed: _toggleMute,
                    //   ),
                    // ),
                    // Positioned(
                    //   bottom: 8,
                    //   left: 0,
                    //   right: 0,
                    //   child: Padding(
                    //     padding: const EdgeInsets.symmetric(horizontal: 5),
                    //     child: VideoProgressIndicator(
                    //       _controller,
                    //       allowScrubbing: true,
                    //       colors: VideoProgressColors(
                    //         playedColor: AppColors.primaryColor,
                    //         backgroundColor: Colors.grey,
                    //       ),
                    //     ),
                    //   ),
                    // ),
                  ],
                ),
              )
            : Container(
                height: 300,
                width: 100,
                alignment: Alignment.center,
                child: const CircularProgressIndicator(
                  color: AppColors.primaryColor,
                ),
              ),
      ),
    );
  }
}

class FullScreenVideoPlayer extends StatefulWidget {
  final String videoUrl;

  const FullScreenVideoPlayer({Key? key, required this.videoUrl})
      : super(key: key);

  @override
  _FullScreenVideoPlayerState createState() => _FullScreenVideoPlayerState();
}

class _FullScreenVideoPlayerState extends State<FullScreenVideoPlayer> {
  late VideoPlayerController _controller;
  bool _isMuted = true;
  bool _isPlaying = false;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(widget.videoUrl)
      ..initialize().then((_) {
        setState(() {});
        _controller.play();
      });
    _controller.setLooping(true);
    _controller.setVolume(_isMuted ? 0 : 1);

    _controller.addListener(() {
      if (_controller.value.isPlaying != _isPlaying) {
        setState(() {
          _isPlaying = _controller.value.isPlaying;
        });
      }
    });
  }

  @override
  void dispose() {
    _controller.pause();
    _controller.dispose();
    super.dispose();
  }

  void _toggleMute() {
    setState(() {
      _isMuted = !_isMuted;
      _controller.setVolume(_isMuted ? 0 : 1);
    });
  }

  void _togglePlayPause() {
    if (_controller.value.isPlaying) {
      _controller.pause();
    } else {
      _controller.play();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: _controller.value.isInitialized
          ? Stack(
              children: [
                GestureDetector(
                  onTap: _togglePlayPause,
                  child: Center(
                    child: AspectRatio(
                      aspectRatio: _controller.value.aspectRatio,
                      child: VideoPlayer(_controller),
                    ),
                  ),
                ),
                // Top Controls
                Positioned(
                  top: 40,
                  left: 20,
                  child: Container(
                    decoration: BoxDecoration(
                        color: Colors.black26, shape: BoxShape.circle),
                    child: IconButton(
                      icon: const Icon(Icons.arrow_back, color: Colors.white),
                      onPressed: () => Navigator.pop(context),
                    ),
                  ),
                ),
                Positioned(
                  top: 40,
                  right: 20,
                  child: Container(
                    decoration: BoxDecoration(
                        color: Colors.black26, shape: BoxShape.circle),
                    child: IconButton(
                      icon: Icon(
                        _isMuted ? Icons.volume_off : Icons.volume_up,
                        color: Colors.white,
                      ),
                      onPressed: _toggleMute,
                    ),
                  ),
                ),
                // Progress bar at bottom
                Positioned(
                  bottom: 30,
                  left: 0,
                  right: 0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: VideoProgressIndicator(
                      _controller,
                      allowScrubbing: true,
                      colors: VideoProgressColors(
                        playedColor: AppColors.primaryColor,
                        bufferedColor: Colors.grey,
                        backgroundColor: Colors.white24,
                      ),
                    ),
                  ),
                ),
                // Play/Pause Icon
                if (!_isPlaying)
                  Center(
                    child: GestureDetector(
                      onTap: _togglePlayPause,
                      child: Container(
                        decoration: BoxDecoration(
                            color: Colors.black26, shape: BoxShape.circle),
                        child: const Icon(
                          Icons.play_arrow,
                          size: 80,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
              ],
            )
          : const Center(
              child: CircularProgressIndicator(color: Colors.white),
            ),
    );
  }
}
