import 'package:flutter/material.dart';

class AddCashPage extends StatefulWidget {
  @override
  State<AddCashPage> createState() => _AddCashPageState();
}

class _AddCashPageState extends State<AddCashPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        backgroundColor: Colors.grey.shade100,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () {},
        ),
        title: Text('Add Cash', style: TextStyle(color: Colors.black)),
        centerTitle: false,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Enter Amount', style: TextStyle(fontSize: 16)),
            SizedBox(height: 8),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(24),
              ),
              child: TextFormField(
                keyboardType: TextInputType.number,
                decoration: InputDecoration(
                  prefixText: '₹ ',
                  border: InputBorder.none,
                  hintText: 'Enter amount here',
                ),
              ),
            ),
            SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _amountButton('₹100'),
                _amountButton('₹50'),
                _amountButton('₹10'),
              ],
            ),
            SizedBox(height: 16),
            Row(
              children: [
                CircleAvatar(
                    radius: 12,
                    backgroundImage: AssetImage(
                        'assets/user.png')), // replace with real image
                SizedBox(width: 8),
                Text('2,21,170 Players ',
                    style: TextStyle(fontWeight: FontWeight.bold)),
                Text('added cash today', style: TextStyle(color: Colors.green)),
              ],
            ),
            SizedBox(height: 16),
            Row(
              children: [
                Text('Coupon code? ',
                    style: TextStyle(fontWeight: FontWeight.bold)),
                Text('APPLY',
                    style: TextStyle(
                        color: Colors.purple, fontWeight: FontWeight.bold)),
              ],
            ),
            SizedBox(height: 16),
            Container(
              padding: EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.purple.shade50,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                          child: Text(
                        'ZUPEESWAGAT',
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 16),
                      )),
                      Text('APPLY',
                          style: TextStyle(
                              color: Colors.purple,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                  SizedBox(height: 4),
                  Text('100% Instant Cashback',
                      style: TextStyle(fontWeight: FontWeight.bold)),
                  Text('Minimum ₹10\nApplicable only on first deposit',
                      style: TextStyle(fontSize: 12)),
                ],
              ),
            ),
            Spacer(),
            Center(
                child: Text('100% safe & secure',
                    style: TextStyle(color: Colors.grey))),
            SizedBox(height: 8),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                minimumSize: Size(double.infinity, 48),
                backgroundColor: Colors.grey.shade400,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30)),
              ),
              child: Text('Add Cash'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _amountButton(String label) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.grey.shade300),
      ),
      child: Text(label, style: TextStyle(fontWeight: FontWeight.bold)),
    );
  }
}
