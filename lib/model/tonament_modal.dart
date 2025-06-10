class SubscriptionModel {
  final List<SubscriptionData> data;

  SubscriptionModel({required this.data});

  factory SubscriptionModel.fromJson(Map<String, dynamic> json) {
    return SubscriptionModel(
      data: List<SubscriptionData>.from(
        json['data'].map((x) => SubscriptionData.fromJson(x)),
      ),
    );
  }
}

class SubscriptionData {
  final String poolPrice;
  final int entryFee;
  final int timerShow;
  final String pricePoolBD;
  final String plateformFee;

  SubscriptionData({
    required this.poolPrice,
    required this.entryFee,
    required this.timerShow,
    required this.pricePoolBD,
    required this.plateformFee,
  });

  factory SubscriptionData.fromJson(Map<String, dynamic> json) {
    return SubscriptionData(
      poolPrice: json['poolPrice'],
      entryFee: json['entry_fee'],
      timerShow: int.parse(json['timer_show']),
      pricePoolBD: json['pricePoolBD'],
      plateformFee: json['plateformFee'],
    );
  }
}
