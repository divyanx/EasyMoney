const rawData = [{
    "type": "debit",
    "amount": -1671,
    "mode": "Internation",
    "merchant": "Netflix",
    "datetime": "2022-09-16 18:00:14",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1700, "sender": "Paytm", "datetime": "2021-11-07 16:45:14"}, {
    "type": "debit",
    "amount": -1185,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2022-06-25 05:52:41",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 1122, "sender": "NEFT", "datetime": "2021-12-31 07:53:07"}, {
    "type": "debit",
    "amount": -2299,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2022-05-24 01:20:59",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 1178, "sender": "PhonePe", "datetime": "2021-12-09 00:45:31"}, {
    "type": "debit",
    "amount": -2151,
    "mode": "Card",
    "merchant": "Google",
    "datetime": "2021-12-10 02:09:49",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 2364, "sender": "Paytm", "datetime": "2022-09-06 01:47:00"}, {
    "type": "debit",
    "amount": -2642,
    "mode": "Internation",
    "merchant": "Github",
    "datetime": "2022-07-02 12:11:44",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2280, "sender": "NEFT", "datetime": "2022-01-11 16:53:02"}, {
    "type": "debit",
    "amount": -2144,
    "mode": "Internation",
    "merchant": "Audible",
    "datetime": "2021-11-10 19:21:05",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 2184, "sender": "BhimUPI", "datetime": "2022-09-22 13:54:46"}, {
    "type": "debit",
    "amount": -2259,
    "mode": "Internation",
    "merchant": "Apple",
    "datetime": "2022-10-06 13:33:58",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2419, "sender": "BhimUPI", "datetime": "2022-01-26 12:26:16"}, {
    "type": "debit",
    "amount": -2755,
    "mode": "Internation",
    "merchant": "Github",
    "datetime": "2022-09-07 09:39:09",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1957, "sender": "Swift", "datetime": "2021-11-25 13:11:07"}, {
    "type": "debit",
    "amount": -1932,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2021-12-21 20:50:00",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2400, "sender": "Swift", "datetime": "2022-06-21 18:05:21"}, {
    "type": "debit",
    "amount": -2537,
    "mode": "Internation",
    "merchant": "Apple",
    "datetime": "2022-10-06 11:31:03",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1167, "sender": "Swift", "datetime": "2022-06-14 10:12:30"}, {
    "type": "debit",
    "amount": -2110,
    "mode": "Card",
    "merchant": "StackOverflow",
    "datetime": "2022-05-08 06:39:48",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 2230, "sender": "Paytm", "datetime": "2022-10-11 03:35:06"}, {
    "type": "debit",
    "amount": -1450,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-10-03 07:03:22",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1745, "sender": "Paytm", "datetime": "2022-06-30 20:12:06"}, {
    "type": "debit",
    "amount": -2307,
    "mode": "Internation",
    "merchant": "StackOverflow",
    "datetime": "2022-06-29 19:37:19",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 2337, "sender": "PhonePe", "datetime": "2022-01-19 03:25:34"}, {
    "type": "debit",
    "amount": -2881,
    "mode": "Card",
    "merchant": "Audible",
    "datetime": "2022-03-22 09:03:39",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 2024, "sender": "BhimUPI", "datetime": "2022-01-06 03:15:53"}, {
    "type": "debit",
    "amount": -2428,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-06-16 07:59:46",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 1360, "sender": "Swift", "datetime": "2022-08-10 13:33:03"}, {
    "type": "debit",
    "amount": -1803,
    "mode": "Internation",
    "merchant": "StackOverflow",
    "datetime": "2021-10-17 10:05:42",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1736, "sender": "PhonePe", "datetime": "2022-10-11 19:44:26"}, {
    "type": "debit",
    "amount": -2077,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2022-09-14 19:36:19",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 2740, "sender": "Swift", "datetime": "2022-04-08 07:22:57"}, {
    "type": "debit",
    "amount": -1461,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-02-15 03:32:53",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 2752, "sender": "NEFT", "datetime": "2022-04-13 01:33:38"}, {
    "type": "debit",
    "amount": -2933,
    "mode": "UPI",
    "merchant": "Facebook",
    "datetime": "2022-08-26 12:05:29",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1654, "sender": "PhonePe", "datetime": "2022-05-25 10:39:20"}, {
    "type": "debit",
    "amount": -1537,
    "mode": "UPI",
    "merchant": "Facebook",
    "datetime": "2022-03-04 18:26:43",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 1646, "sender": "PhonePe", "datetime": "2022-01-18 04:57:08"}, {
    "type": "debit",
    "amount": -1190,
    "mode": "Card",
    "merchant": "Github",
    "datetime": "2021-12-19 18:54:29",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2054, "sender": "Swift", "datetime": "2022-05-15 09:55:05"}, {
    "type": "debit",
    "amount": -1589,
    "mode": "UPI",
    "merchant": "Facebook",
    "datetime": "2022-09-27 20:46:51",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1556, "sender": "NEFT", "datetime": "2022-07-05 03:23:34"}, {
    "type": "debit",
    "amount": -2136,
    "mode": "Internation",
    "merchant": "StackOverflow",
    "datetime": "2022-02-06 07:31:50",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2851, "sender": "Swift", "datetime": "2022-09-16 10:43:44"}, {
    "type": "debit",
    "amount": -2127,
    "mode": "Internation",
    "merchant": "Amazon",
    "datetime": "2022-04-24 00:31:43",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2319, "sender": "NEFT", "datetime": "2022-07-05 10:58:50"}, {
    "type": "debit",
    "amount": -1201,
    "mode": "UPI",
    "merchant": "Apple",
    "datetime": "2022-09-01 02:22:06",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 2591, "sender": "Swift", "datetime": "2022-02-07 22:14:00"}, {
    "type": "debit",
    "amount": -2192,
    "mode": "Card",
    "merchant": "Github",
    "datetime": "2022-04-11 21:41:38",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1002, "sender": "NEFT", "datetime": "2021-11-08 14:24:04"}, {
    "type": "debit",
    "amount": -1233,
    "mode": "UPI",
    "merchant": "Netflix",
    "datetime": "2021-11-08 02:41:19",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1696, "sender": "BhimUPI", "datetime": "2022-01-16 18:39:27"}, {
    "type": "debit",
    "amount": -2317,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-01-04 17:50:48",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2356, "sender": "NEFT", "datetime": "2022-02-03 14:52:43"}, {
    "type": "debit",
    "amount": -1044,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-10-14 14:02:44",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 1290, "sender": "BhimUPI", "datetime": "2022-08-10 03:56:28"}, {
    "type": "debit",
    "amount": -1811,
    "mode": "Internation",
    "merchant": "Audible",
    "datetime": "2022-07-08 00:56:22",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1154, "sender": "Paytm", "datetime": "2021-12-05 22:16:55"}, {
    "type": "debit",
    "amount": -2038,
    "mode": "Card",
    "merchant": "Facebook",
    "datetime": "2022-09-16 21:54:38",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2857, "sender": "PhonePe", "datetime": "2021-10-16 15:47:30"}, {
    "type": "debit",
    "amount": -1996,
    "mode": "UPI",
    "merchant": "Apple",
    "datetime": "2022-05-10 16:31:31",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1991, "sender": "PhonePe", "datetime": "2022-03-12 21:39:35"}, {
    "type": "debit",
    "amount": -2828,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-01-15 21:46:04",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 2273, "sender": "Paytm", "datetime": "2022-05-28 14:45:35"}, {
    "type": "debit",
    "amount": -1090,
    "mode": "UPI",
    "merchant": "Audible",
    "datetime": "2021-12-06 23:47:02",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1479, "sender": "NEFT", "datetime": "2021-11-12 17:45:44"}, {
    "type": "debit",
    "amount": -1524,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2022-08-18 15:46:27",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1027, "sender": "PhonePe", "datetime": "2022-04-28 16:09:58"}, {
    "type": "debit",
    "amount": -2956,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2021-10-31 03:16:37",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2849, "sender": "BhimUPI", "datetime": "2021-10-27 12:15:03"}, {
    "type": "debit",
    "amount": -2028,
    "mode": "UPI",
    "merchant": "Amazon",
    "datetime": "2022-09-03 07:37:41",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 2553, "sender": "Paytm", "datetime": "2021-10-20 16:03:08"}, {
    "type": "debit",
    "amount": -1517,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-07-08 17:08:24",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 1771, "sender": "PhonePe", "datetime": "2022-03-20 02:53:21"}, {
    "type": "debit",
    "amount": -1841,
    "mode": "UPI",
    "merchant": "Google",
    "datetime": "2021-12-06 22:59:56",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2666, "sender": "PhonePe", "datetime": "2022-08-21 11:43:01"}, {
    "type": "debit",
    "amount": -2675,
    "mode": "Internation",
    "merchant": "Amazon",
    "datetime": "2022-08-08 14:18:48",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1369, "sender": "BhimUPI", "datetime": "2022-02-04 10:34:25"}, {
    "type": "debit",
    "amount": -1358,
    "mode": "Internation",
    "merchant": "Apple",
    "datetime": "2022-08-23 00:51:58",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1476, "sender": "BhimUPI", "datetime": "2022-03-24 19:35:31"}, {
    "type": "debit",
    "amount": -1037,
    "mode": "Card",
    "merchant": "Audible",
    "datetime": "2022-10-15 01:03:49",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 1441, "sender": "NEFT", "datetime": "2022-09-25 12:20:22"}, {
    "type": "debit",
    "amount": -2103,
    "mode": "Card",
    "merchant": "Audible",
    "datetime": "2022-07-20 16:32:39",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1348, "sender": "Paytm", "datetime": "2021-12-07 16:30:40"}, {
    "type": "debit",
    "amount": -1238,
    "mode": "Internation",
    "merchant": "Netflix",
    "datetime": "2022-01-27 21:45:15",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 2483, "sender": "Swift", "datetime": "2021-10-19 21:50:55"}, {
    "type": "debit",
    "amount": -1259,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-02-26 03:19:41",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 2778, "sender": "Paytm", "datetime": "2021-12-05 12:06:37"}, {
    "type": "debit",
    "amount": -1367,
    "mode": "UPI",
    "merchant": "Netflix",
    "datetime": "2021-12-15 11:46:19",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 2525, "sender": "PhonePe", "datetime": "2022-01-01 21:05:18"}, {
    "type": "debit",
    "amount": -2415,
    "mode": "Internation",
    "merchant": "Facebook",
    "datetime": "2022-01-25 02:09:43",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1787, "sender": "Swift", "datetime": "2021-11-14 05:47:14"}, {
    "type": "debit",
    "amount": -1250,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-09-30 23:20:24",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1108, "sender": "PhonePe", "datetime": "2021-12-07 00:16:31"}, {
    "type": "debit",
    "amount": -1325,
    "mode": "Internation",
    "merchant": "StackOverflow",
    "datetime": "2022-10-02 21:10:13",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1703, "sender": "NEFT", "datetime": "2021-10-17 08:19:04"}, {
    "type": "debit",
    "amount": -1665,
    "mode": "UPI",
    "merchant": "Amazon",
    "datetime": "2022-09-29 03:12:45",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2156, "sender": "Paytm", "datetime": "2022-02-13 16:15:43"}, {
    "type": "debit",
    "amount": -2583,
    "mode": "UPI",
    "merchant": "Netflix",
    "datetime": "2022-04-29 03:52:15",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1371, "sender": "PhonePe", "datetime": "2021-11-26 19:42:36"}, {
    "type": "debit",
    "amount": -1118,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-06-03 12:52:58",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1669, "sender": "NEFT", "datetime": "2022-03-10 08:05:32"}, {
    "type": "debit",
    "amount": -1445,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-06-04 13:24:38",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 1383, "sender": "Paytm", "datetime": "2022-05-11 14:19:34"}, {
    "type": "debit",
    "amount": -2655,
    "mode": "Card",
    "merchant": "Audible",
    "datetime": "2022-10-13 04:49:31",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2430, "sender": "Swift", "datetime": "2021-10-19 13:30:51"}, {
    "type": "debit",
    "amount": -1664,
    "mode": "Card",
    "merchant": "Audible",
    "datetime": "2022-05-15 11:54:41",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 1013, "sender": "PhonePe", "datetime": "2021-11-30 14:22:37"}, {
    "type": "debit",
    "amount": -1282,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-03-16 00:57:14",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1227, "sender": "PhonePe", "datetime": "2022-02-14 17:54:18"}, {
    "type": "debit",
    "amount": -2232,
    "mode": "UPI",
    "merchant": "Amazon",
    "datetime": "2022-06-26 04:23:55",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1070, "sender": "Paytm", "datetime": "2022-01-26 10:42:46"}, {
    "type": "debit",
    "amount": -2628,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2022-01-24 02:10:36",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1644, "sender": "Swift", "datetime": "2021-11-25 00:51:26"}, {
    "type": "debit",
    "amount": -1089,
    "mode": "Card",
    "merchant": "StackOverflow",
    "datetime": "2021-12-20 14:40:20",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2697, "sender": "Paytm", "datetime": "2022-01-31 22:13:21"}, {
    "type": "debit",
    "amount": -1653,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2021-11-22 00:58:34",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2809, "sender": "Swift", "datetime": "2021-10-20 00:47:09"}, {
    "type": "debit",
    "amount": -2010,
    "mode": "UPI",
    "merchant": "Audible",
    "datetime": "2022-05-13 00:16:19",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 2514, "sender": "Swift", "datetime": "2022-01-12 02:49:36"}, {
    "type": "debit",
    "amount": -1731,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-09-16 10:25:27",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2131, "sender": "BhimUPI", "datetime": "2022-02-02 23:26:30"}, {
    "type": "debit",
    "amount": -2907,
    "mode": "Card",
    "merchant": "Netflix",
    "datetime": "2022-06-13 18:27:50",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 1804, "sender": "NEFT", "datetime": "2022-05-19 06:42:18"}, {
    "type": "debit",
    "amount": -2930,
    "mode": "UPI",
    "merchant": "Audible",
    "datetime": "2022-03-08 00:19:42",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1880, "sender": "PhonePe", "datetime": "2022-10-09 08:11:27"}, {
    "type": "debit",
    "amount": -2964,
    "mode": "Internation",
    "merchant": "Apple",
    "datetime": "2022-04-07 08:42:24",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1227, "sender": "BhimUPI", "datetime": "2022-05-09 16:14:36"}, {
    "type": "debit",
    "amount": -1730,
    "mode": "UPI",
    "merchant": "Google",
    "datetime": "2022-07-20 03:40:14",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1463, "sender": "BhimUPI", "datetime": "2022-01-06 01:59:56"}, {
    "type": "debit",
    "amount": -2223,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2022-09-07 02:53:55",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1461, "sender": "PhonePe", "datetime": "2022-01-13 19:21:39"}, {
    "type": "debit",
    "amount": -2238,
    "mode": "Internation",
    "merchant": "Facebook",
    "datetime": "2022-01-06 06:10:44",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2272, "sender": "NEFT", "datetime": "2022-06-27 05:21:30"}, {
    "type": "debit",
    "amount": -2548,
    "mode": "Card",
    "merchant": "Netflix",
    "datetime": "2022-07-17 15:31:12",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 2421, "sender": "PhonePe", "datetime": "2022-05-28 12:28:15"}, {
    "type": "debit",
    "amount": -2812,
    "mode": "Internation",
    "merchant": "Github",
    "datetime": "2021-12-24 08:12:01",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 2566, "sender": "Paytm", "datetime": "2021-11-04 07:22:28"}, {
    "type": "debit",
    "amount": -2491,
    "mode": "UPI",
    "merchant": "Google",
    "datetime": "2022-06-16 11:14:06",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 1616, "sender": "PhonePe", "datetime": "2022-06-14 12:11:56"}, {
    "type": "debit",
    "amount": -1899,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2022-05-11 21:02:02",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1337, "sender": "Swift", "datetime": "2021-11-23 23:12:27"}, {
    "type": "debit",
    "amount": -2690,
    "mode": "UPI",
    "merchant": "Netflix",
    "datetime": "2021-12-16 18:21:34",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1938, "sender": "Paytm", "datetime": "2022-06-12 09:31:09"}, {
    "type": "debit",
    "amount": -2322,
    "mode": "UPI",
    "merchant": "Facebook",
    "datetime": "2022-08-12 19:42:23",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 2108, "sender": "PhonePe", "datetime": "2022-09-10 12:56:04"}, {
    "type": "debit",
    "amount": -1634,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-02-25 21:38:09",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 1741, "sender": "BhimUPI", "datetime": "2022-04-14 06:54:22"}, {
    "type": "debit",
    "amount": -1773,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2022-09-19 12:53:07",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2306, "sender": "Paytm", "datetime": "2022-02-05 03:29:34"}, {
    "type": "debit",
    "amount": -1422,
    "mode": "UPI",
    "merchant": "Facebook",
    "datetime": "2022-04-29 13:02:17",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1384, "sender": "NEFT", "datetime": "2022-04-16 01:36:23"}, {
    "type": "debit",
    "amount": -1215,
    "mode": "Card",
    "merchant": "Google",
    "datetime": "2022-08-07 21:07:12",
    "exactMode": "American Express 1234"
}, {"type": "credit", "amount": 2648, "sender": "NEFT", "datetime": "2022-06-10 18:48:18"}, {
    "type": "debit",
    "amount": -2142,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-02-15 16:05:29",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 2286, "sender": "BhimUPI", "datetime": "2022-01-07 08:38:56"}, {
    "type": "debit",
    "amount": -2284,
    "mode": "Card",
    "merchant": "Google",
    "datetime": "2022-01-30 18:04:00",
    "exactMode": "Master Card 1234"
}, {"type": "credit", "amount": 2697, "sender": "PhonePe", "datetime": "2022-09-01 07:25:44"}, {
    "type": "debit",
    "amount": -1628,
    "mode": "Internation",
    "merchant": "Audible",
    "datetime": "2021-11-20 19:09:16",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2298, "sender": "BhimUPI", "datetime": "2022-07-15 14:38:24"}, {
    "type": "debit",
    "amount": -2815,
    "mode": "Card",
    "merchant": "Google",
    "datetime": "2022-04-02 07:36:18",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2316, "sender": "PhonePe", "datetime": "2021-11-28 21:00:57"}, {
    "type": "debit",
    "amount": -1844,
    "mode": "Internation",
    "merchant": "Audible",
    "datetime": "2022-09-03 02:15:10",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1532, "sender": "Swift", "datetime": "2022-04-24 00:11:57"}, {
    "type": "debit",
    "amount": -2058,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-07-09 23:42:19",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 1370, "sender": "PhonePe", "datetime": "2021-12-26 23:22:05"}, {
    "type": "debit",
    "amount": -2961,
    "mode": "Card",
    "merchant": "Google",
    "datetime": "2021-12-04 06:21:13",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2319, "sender": "PhonePe", "datetime": "2022-04-15 01:33:45"}, {
    "type": "debit",
    "amount": -2587,
    "mode": "UPI",
    "merchant": "Google",
    "datetime": "2022-04-26 21:50:27",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2038, "sender": "Paytm", "datetime": "2022-02-25 12:10:14"}, {
    "type": "debit",
    "amount": -2503,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-05-27 01:50:48",
    "exactMode": "Paytm"
}, {"type": "credit", "amount": 2616, "sender": "Paytm", "datetime": "2022-02-03 22:38:21"}, {
    "type": "debit",
    "amount": -2882,
    "mode": "Card",
    "merchant": "Github",
    "datetime": "2022-03-16 07:40:01",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1955, "sender": "NEFT", "datetime": "2022-08-14 18:35:25"}, {
    "type": "debit",
    "amount": -2634,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2022-05-03 03:29:44",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2164, "sender": "PhonePe", "datetime": "2022-05-29 00:23:49"}, {
    "type": "debit",
    "amount": -2426,
    "mode": "Card",
    "merchant": "Apple",
    "datetime": "2022-06-02 03:09:39",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 2031, "sender": "PhonePe", "datetime": "2022-05-06 17:59:58"}, {
    "type": "debit",
    "amount": -1192,
    "mode": "Internation",
    "merchant": "StackOverflow",
    "datetime": "2022-09-03 12:48:25",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 2848, "sender": "Swift", "datetime": "2022-02-16 03:24:06"}, {
    "type": "debit",
    "amount": -2781,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2022-08-31 05:52:30",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 2631, "sender": "BhimUPI", "datetime": "2022-07-20 01:02:31"}, {
    "type": "debit",
    "amount": -2091,
    "mode": "UPI",
    "merchant": "Audible",
    "datetime": "2022-04-03 10:42:18",
    "exactMode": "PhonePe"
}, {"type": "credit", "amount": 2532, "sender": "Paytm", "datetime": "2022-05-11 00:13:17"}, {
    "type": "debit",
    "amount": -2883,
    "mode": "Internation",
    "merchant": "Apple",
    "datetime": "2022-10-07 04:29:48",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 1739, "sender": "Paytm", "datetime": "2022-10-09 05:15:38"}, {
    "type": "debit",
    "amount": -2923,
    "mode": "UPI",
    "merchant": "Github",
    "datetime": "2021-10-25 10:52:09",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1770, "sender": "Paytm", "datetime": "2022-05-22 02:43:33"}, {
    "type": "debit",
    "amount": -2351,
    "mode": "Card",
    "merchant": "Amazon",
    "datetime": "2021-10-20 17:34:12",
    "exactMode": "Visa 1234"
}, {"type": "credit", "amount": 1932, "sender": "Swift", "datetime": "2022-07-29 07:47:36"}, {
    "type": "debit",
    "amount": -2546,
    "mode": "UPI",
    "merchant": "StackOverflow",
    "datetime": "2022-02-28 05:04:18",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 1527, "sender": "Swift", "datetime": "2022-06-30 18:28:20"}, {
    "type": "debit",
    "amount": -1260,
    "mode": "Internation",
    "merchant": "Netflix",
    "datetime": "2022-04-04 18:30:10",
    "exactMode": "NEFT"
}, {"type": "credit", "amount": 2710, "sender": "Swift", "datetime": "2022-09-10 15:52:32"}, {
    "type": "debit",
    "amount": -2570,
    "mode": "UPI",
    "merchant": "Amazon",
    "datetime": "2022-08-19 02:24:41",
    "exactMode": "BhimUPI"
}, {"type": "credit", "amount": 2574, "sender": "PhonePe", "datetime": "2021-12-07 09:01:19"}, {
    "type": "debit",
    "amount": -2523,
    "mode": "Internation",
    "merchant": "Google",
    "datetime": "2022-01-13 06:59:43",
    "exactMode": "Swift"
}, {"type": "credit", "amount": 1912, "sender": "BhimUPI", "datetime": "2022-07-31 01:31:36"}]
export default rawData;