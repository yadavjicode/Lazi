import 'package:flutter/material.dart';
import 'package:ludonew/util/constant/contant_color.dart';
import 'package:ludonew/widgets/font.dart';

class SupermeLeaguePage extends StatefulWidget {
  const SupermeLeaguePage({super.key});

  @override
  State<SupermeLeaguePage> createState() => _SupermeLeaguePageState();
}

class _SupermeLeaguePageState extends State<SupermeLeaguePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          iconTheme: const IconThemeData(color: Colors.white),
          title: Text(
            'Ludo Supreme League',
            style: FontConstant.styleSemiBold(
              fontSize: 18,
              color: AppColors.white,
            ),
          ),
          bottom: const TabBar(
            tabs: [
              Tab(text: 'Tournament'),
              Tab(text: 'Leaderboard'),
            ],
            indicatorColor: Colors.white,
            labelColor: Colors.white,
            unselectedLabelColor: Colors.grey,
          ),
        ),
        body: const TabBarView(
          children: [
            TournamentTab(),
            Center(child: Text('Leaderboard coming soon')),
          ],
        ),
        bottomNavigationBar: Container(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryColor,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  minimumSize: const Size(double.infinity, 0),
                ),
                child: const Text('Play Now',
                    style: TextStyle(color: Colors.white)),
              ),
              const SizedBox(height: 8),
              const Text(
                'Tournament Closes in 06h 55m',
                style: TextStyle(fontSize: 14, color: Colors.black54),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class TournamentTab extends StatefulWidget {
  const TournamentTab({super.key});

  @override
  State<TournamentTab> createState() => _TournamentTabState();
}

class _TournamentTabState extends State<TournamentTab> {
  bool _showAllRanks = false;

  final List<Map<String, String>> rankList = [
    {'rank': 'Rank #1', 'amount': '₹1,50,000'},
    {'rank': 'Rank #2', 'amount': '₹50,000'},
    {'rank': 'Rank #3', 'amount': '₹10,000'},
    {'rank': 'Rank #4-#5', 'amount': '₹5,000'},
    {'rank': 'Rank #6-#10', 'amount': '₹2,500'},
    {'rank': 'Rank #11-#20', 'amount': '₹750'},
    {'rank': 'Rank #21-#40', 'amount': '₹500'},
    {'rank': 'Rank #41-#60', 'amount': '₹300'},
    {'rank': 'Rank #61-#110', 'amount': '₹200'},
    {'rank': 'Rank #111-#450', 'amount': '₹100'},
  ];
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(15),
      children: [
        const Center(
          child: Text(
            '🟢 LIVE TOURNAMENT',
            style: TextStyle(color: Colors.green, fontWeight: FontWeight.bold),
          ),
        ),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.deepPurple.shade50,
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Row(
            children: [
              Icon(Icons.info_outline),
              SizedBox(width: 12),
              Expanded(
                  child: Text("You can enter this tournament up to 150 times")),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.purple,
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Score 328+',
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.bold)),
              Text('Win Instant Prize of ₹25',
                  style: TextStyle(color: Colors.white, fontSize: 16)),
              SizedBox(height: 8),
              Text(
                'Note: Final prize will be announced at the end of tournament.',
                style: TextStyle(color: Colors.white70, fontSize: 12),
              )
            ],
          ),
        ),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: Colors.grey.shade400),
            color: Colors.white,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('Prize Pool',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              const SizedBox(height: 4),
              const Text('₹30 LAKH',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              LinearProgressIndicator(
                value: 96376 / 150000,
                color: Colors.purple,
                backgroundColor: Colors.purple.shade100,
              ),
              const SizedBox(height: 4),
              const Text('96376 of 150000 entries filled'),
              const SizedBox(height: 8),
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Fee per entry: ₹25'),
                  Text('First Prize: ₹1.5 LAKH'),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Container(
          margin: const EdgeInsets.all(1),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: Colors.grey.shade400),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const Icon(Icons.emoji_events, color: Colors.red),
                  const SizedBox(width: 10),
                  Text(
                    "Tournament details",
                    style: FontConstant.styleSemiBold(
                      fontSize: 17,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              _buildRow("Tournament Starts", "09:52 PM, 07 May"),
              _buildRow("Tournament Closes", "09:51 PM, 08 May"),
              _buildRow("Results Out", "10:06 PM, 08 May"),
            ],
          ),
        ),
        const SizedBox(height: 12),
        Container(
          margin: const EdgeInsets.all(1),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: Colors.grey.shade400),
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(6),
                    decoration: const BoxDecoration(
                      color: Color(0xFFE6E6FA),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.currency_rupee,
                        color: Colors.purple, size: 20),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'Final Prize Distribution',
                    style: FontConstant.styleSemiBold(
                      fontSize: 15,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Instant Prize',
                        style: FontConstant.styleSemiBold(
                          fontSize: 15,
                          color: Colors.black,
                        ),
                      ),
                      Text(
                        'On minimum score of 329',
                        style: FontConstant.styleSemiBold(
                          fontSize: 12,
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                  Text(
                    '₹25',
                    style: FontConstant.styleSemiBold(
                      fontSize: 15,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              const Divider(),
              const SizedBox(height: 8),

              // Show only top 3 or all based on toggle
              for (int i = 0; i < (_showAllRanks ? rankList.length : 3); i++)
                _rankRow(rankList[i]['rank']!, rankList[i]['amount']!),

              const SizedBox(height: 12),
              GestureDetector(
                onTap: () {
                  setState(() {
                    _showAllRanks = !_showAllRanks;
                  });
                },
                child: Align(
                  alignment: Alignment.centerRight,
                  child: Text(
                    _showAllRanks ? 'SHOW LESS' : 'VIEW ALL',
                    style: FontConstant.styleSemiBold(
                      fontSize: 13,
                      color: Colors.red,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildRow(String title, String time) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 12),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: Colors.grey, width: 0.3),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            title,
            style: FontConstant.styleSemiBold(
              fontSize: 15,
              color: Colors.black,
            ),
          ),
          Text(
            time,
            style: FontConstant.styleSemiBold(
              fontSize: 15,
              color: Colors.black,
            ),
          ),
        ],
      ),
    );
  }

  Widget _rankRow(String rank, String prize) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            rank,
            style: FontConstant.styleSemiBold(
              fontSize: 15,
              color: Colors.black,
            ),
          ),
          Text(
            prize,
            style: FontConstant.styleSemiBold(
              fontSize: 15,
              color: Colors.black,
            ),
          ),
        ],
      ),
    );
  }
}
