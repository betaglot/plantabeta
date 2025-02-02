import json

Skema_List = [
    {
        "startTime": "00:06:00.000",
        "finishTime": "00:06:19.000",
        "site_ID": "1"
    },
    {
        "startTime": "00:06:19.000",
        "finishTime": "00:06:26.000",
        "site_ID": "2"
    },
    {
        "startTime": "00:06:26.000",
        "finishTime": "00:06:36.000",
        "site_ID": "3"
    },
    {
        "startTime": "00:06:36.000",
        "finishTime": "00:06:53.000",
        "site_ID": "4"
    },
    {
        "startTime": "00:06:53.000",
        "finishTime": "00:07:02.000",
        "site_ID": "5"
    },
    {
        "startTime": "00:07:02.000",
        "finishTime": "00:07:12.000",
        "site_ID": "6"
    },
    {
        "startTime": "00:07:12.000",
        "finishTime": "00:07:23.000",
        "site_ID": "7"
    },
    {
        "startTime": "00:07:24.000",
        "finishTime": "00:07:36.000",
        "site_ID": "8"
    },
    {
        "startTime": "00:07:36.000",
        "finishTime": "00:07:54.000",
        "site_ID": "9"
    },
    {
        "startTime": "00:07:54.000",
        "finishTime": "00:08:08.000",
        "site_ID": "10"
    },
    {
        "startTime": "00:08:08.000",
        "finishTime": "00:08:21.000",
        "site_ID": "11"
    },
    {
        "startTime": "00:08:21.000",
        "finishTime": "00:08:32.000",
        "site_ID": "12"
    },
    {
        "startTime": "00:08:32.000",
        "finishTime": "00:08:44.641",
        "site_ID": "13"
    },
    {
        "startTime": "00:08:44.641",
        "finishTime": "00:08:54.049",
        "site_ID": "14"
    },
    {
        "startTime": "00:08:54.049",
        "finishTime": "00:09:07.027",
        "site_ID": "15"
    },
    {
        "startTime": "00:09:07.027",
        "finishTime": "00:09:22.140",
        "site_ID": "16"
    },
    {
        "startTime": "00:09:22.140",
        "finishTime": "00:09:34.084",
        "site_ID": "17"
    },
    {
        "startTime": "00:09:34.084",
        "finishTime": "00:09:47.763",
        "site_ID": "18"
    },
    {
        "startTime": "00:09:47.763",
        "finishTime": "00:10:01.108",
        "site_ID": "19"
    },
    {
        "startTime": "00:10:01.108",
        "finishTime": "00:12:11.495",
        "site_ID": "20"
    },
    {
        "startTime": "00:12:11.495",
        "finishTime": "00:12:23.472",
        "site_ID": "21"
    },
    {
        "startTime": "00:12:23.472",
        "finishTime": "00:12:33.915",
        "site_ID": "22"
    },
    {
        "startTime": "00:12:33.915",
        "finishTime": "00:12:44.925",
        "site_ID": "23"
    },
    {
        "startTime": "00:12:44.925",
        "finishTime": "00:12:54.800",
        "site_ID": "24"
    },
    {
        "startTime": "00:12:54.800",
        "finishTime": "00:13:04.509",
        "site_ID": "25"
    },
    {
        "startTime": "00:13:04.509",
        "finishTime": "00:13:25.060",
        "site_ID": "26"
    },
    {
        "startTime": "00:13:25.060",
        "finishTime": "00:13:36.203",
        "site_ID": "27"
    },
    {
        "startTime": "00:13:36.203",
        "finishTime": "00:13:44.210",
        "site_ID": "28"
    },
    {
        "startTime": "00:13:44.210",
        "finishTime": "00:13:54.085",
        "site_ID": "29"
    },
    {
        "startTime": "00:13:54.085",
        "finishTime": "00:14:03.660",
        "site_ID": "30"
    },
    {
        "startTime": "00:14:03.660",
        "finishTime": "00:14:15.537",
        "site_ID": "31"
    },
    {
        "startTime": "00:14:15.537",
        "finishTime": "00:14:24.011",
        "site_ID": "32"
    },
    {
        "startTime": "00:14:24.011",
        "finishTime": "00:14:33.920",
        "site_ID": "33"
    },
    {
        "startTime": "00:14:33.920",
        "finishTime": "00:14:43.095",
        "site_ID": "34"
    },
    {
        "startTime": "00:14:43.095",
        "finishTime": "00:14:54.272",
        "site_ID": "35"
    },
    {
        "startTime": "00:14:54.272",
        "finishTime": "00:15:05.177",
        "site_ID": "36"
    },
    {
        "startTime": "00:15:05.177",
        "finishTime": "00:15:15.453",
        "site_ID": "37"
    },
    {
        "startTime": "00:15:15.453",
        "finishTime": "00:15:25.529",
        "site_ID": "38"
    },
    {
        "startTime": "00:15:25.529",
        "finishTime": "00:15:35.404",
        "site_ID": "39"
    },
    {
        "startTime": "00:15:35.404",
        "finishTime": "00:15:47.214",
        "site_ID": "40"
    },
    {
        "startTime": "00:15:47.214",
        "finishTime": "00:16:02.661",
        "site_ID": "41"
    },
    {
        "startTime": "00:16:02.661",
        "finishTime": "00:16:12.303",
        "site_ID": "42"
    },
    {
        "startTime": "00:16:12.303",
        "finishTime": "00:16:21.111",
        "site_ID": "43"
    },
    {
        "startTime": "00:16:21.111",
        "finishTime": "00:16:31.000",
        "site_ID": "44"
    },
    {
        "startTime": "00:16:31.000",
        "finishTime": "00:16:39.995",
        "site_ID": "45"
    },
    {
        "startTime": "00:16:39.995",
        "finishTime": "00:16:48.136",
        "site_ID": "46"
    },
    {
        "startTime": "00:16:48.136",
        "finishTime": "00:16:57.778",
        "site_ID": "47"
    },
    {
        "startTime": "00:16:57.778",
        "finishTime": "00:17:09.055",
        "site_ID": "48"
    },
    {
        "startTime": "00:17:09.055",
        "finishTime": "00:17:17.996",
        "site_ID": "49"
    },
    {
        "startTime": "00:17:17.996",
        "finishTime": "00:17:27.505",
        "site_ID": "50"
    },
    {
        "startTime": "00:17:27.505",
        "finishTime": "00:17:38.515",
        "site_ID": "51"
    },
    {
        "startTime": "00:17:38.515",
        "finishTime": "00:17:53.000",
        "site_ID": "52"
    },
    {
        "startTime": "00:17:53.000",
        "finishTime": "00:18:07.540",
        "site_ID": "53"
    },
    {
        "startTime": "00:18:07.540",
        "finishTime": "00:18:15.000",
        "site_ID": "54"
    },
    {
        "startTime": "00:18:15.080",
        "finishTime": "00:18:23.087",
        "site_ID": "55"
    },
    {
        "startTime": "00:18:23.087",
        "finishTime": "00:18:32.095",
        "site_ID": "56"
    },
    {
        "startTime": "00:18:32.095",
        "finishTime": "00:18:40.569",
        "site_ID": "57"
    },
    {
        "startTime": "00:18:40.569",
        "finishTime": "00:18:50.545",
        "site_ID": "58"
    },
    {
        "startTime": "00:18:50.545",
        "finishTime": "00:18:58.185",
        "site_ID": "59"
    },
    {
        "startTime": "00:18:58.185",
        "finishTime": "00:19:06.426",
        "site_ID": "60"
    },
    {
        "startTime": "00:19:06.426",
        "finishTime": "00:19:15.134",
        "site_ID": "61"
    },
    {
        "startTime": "00:19:15.134",
        "finishTime": "00:19:24.809",
        "site_ID": "62"
    },
    {
        "startTime": "00:19:24.809",
        "finishTime": "00:19:34.584",
        "site_ID": "63"
    },
    {
        "startTime": "00:19:34.584",
        "finishTime": "00:19:46.528",
        "site_ID": "64"
    },
    {
        "startTime": "00:19:46.528",
        "finishTime": "00:19:56.137",
        "site_ID": "65"
    },
    {
        "startTime": "00:19:56.137",
        "finishTime": "00:20:06.446",
        "site_ID": "66"
    },
    {
        "startTime": "00:20:06.446",
        "finishTime": "00:20:14.954",
        "site_ID": "67"
    },
    {
        "startTime": "00:20:14.954",
        "finishTime": "00:20:26.264",
        "site_ID": "68"
    },
    {
        "startTime": "00:20:26.264",
        "finishTime": "00:20:34.472",
        "site_ID": "69"
    },
    {
        "startTime": "00:20:34.472",
        "finishTime": "00:20:44.981",
        "site_ID": "70"
    },
    {
        "startTime": "00:20:44.981",
        "finishTime": "00:20:58.559",
        "site_ID": "71"
    },
    {
        "startTime": "00:20:58.559",
        "finishTime": "00:21:10.668",
        "site_ID": "72"
    },
    {
        "startTime": "00:21:11.003",
        "finishTime": "00:21:21.045",
        "site_ID": "73"
    },
    {
        "startTime": "00:21:21.045",
        "finishTime": "00:21:28.919",
        "site_ID": "74"
    },
    {
        "startTime": "00:21:28.919",
        "finishTime": "00:21:40.129",
        "site_ID": "75"
    },
    {
        "startTime": "00:21:40.129",
        "finishTime": "00:21:48.236",
        "site_ID": "76"
    },
    {
        "startTime": "00:21:48.236",
        "finishTime": "00:22:00.000",
        "site_ID": "77"
    },
    {
        "startTime": "00:22:00.380",
        "finishTime": "00:22:10.875",
        "site_ID": "78"
    },
    {
        "startTime": "00:22:10.875",
        "finishTime": "00:22:20.785",
        "site_ID": "79"
    },
    {
        "startTime": "00:22:20.785",
        "finishTime": "00:22:33.229",
        "site_ID": "80"
    },
    {
        "startTime": "00:22:33.229",
        "finishTime": "00:22:54.614",
        "site_ID": "81"
    },
    {
        "startTime": "00:22:54.614",
        "finishTime": "00:23:04.356",
        "site_ID": "82"
    },
    {
        "startTime": "00:23:04.356",
        "finishTime": "00:23:21.304",
        "site_ID": "83"
    },
    {
        "startTime": "00:23:21.304",
        "finishTime": "00:23:35.249",
        "site_ID": "84"
    },
    {
        "startTime": "00:23:35.249",
        "finishTime": "00:23:56.066",
        "site_ID": "85"
    },
    {
        "startTime": "00:23:56.066",
        "finishTime": "00:24:11.880",
        "site_ID": "86"
    },
    {
        "startTime": "00:24:11.880",
        "finishTime": "00:24:28.961",
        "site_ID": "87"
    },
    {
        "startTime": "00:24:28.961",
        "finishTime": "00:24:43.372",
        "site_ID": "88"
    },
    {
        "startTime": "00:24:43.372",
        "finishTime": "00:24:52.515",
        "site_ID": "89"
    },
    {
        "startTime": "00:24:52.515",
        "finishTime": "00:25:08.796",
        "site_ID": "90"
    },
    {
        "startTime": "00:25:08.796",
        "finishTime": "00:25:10.796",
        "site_ID": "91"
    },
    {
        "startTime": "00:25:41.000",
        "finishTime": "00:25:50.000",
        "site_ID": "92"
    },
    {
        "startTime": "00:25:50.000",
        "finishTime": "00:26:00.000",
        "site_ID": "93"
    },
    {
        "startTime": "00:26:00.000",
        "finishTime": "00:26:10.000",
        "site_ID": "94"
    },
    {
        "startTime": "00:26:10.000",
        "finishTime": "00:26:18.000",
        "site_ID": "95"
    },
    {
        "startTime": "00:26:18.000",
        "finishTime": "00:26:28.000",
        "site_ID": "96"
    },
    {
        "startTime": "00:26:28.000",
        "finishTime": "00:26:38.000",
        "site_ID": "97"
    },
    {
        "startTime": "00:26:38.000",
        "finishTime": "00:26:48.000",
        "site_ID": "98"
    },
    {
        "startTime": "00:26:48.000",
        "finishTime": "00:27:00.000",
        "site_ID": "99"
    },
    {
        "startTime": "00:27:00.000",
        "finishTime": "00:27:14.000",
        "site_ID": "100"
    },
    {
        "startTime": "00:27:14.000",
        "finishTime": "00:27:25.000",
        "site_ID": "101"
    },
    {
        "startTime": "00:27:25.000",
        "finishTime": "00:27:35.000",
        "site_ID": "102"
    },
    {
        "startTime": "00:27:35.000",
        "finishTime": "00:27:48.000",
        "site_ID": "103"
    },
    {
        "startTime": "00:27:48.000",
        "finishTime": "00:28:00.000",
        "site_ID": "104"
    },
    {
        "startTime": "00:28:15.000",
        "finishTime": "00:28:30.000",
        "site_ID": "105"
    },
    {
        "startTime": "00:28:30.000",
        "finishTime": "00:28:40.000",
        "site_ID": "106"
    },
    {
        "startTime": "00:28:40.000",
        "finishTime": "00:28:53.000",
        "site_ID": "107"
    },
    {
        "startTime": "00:28:53.000",
        "finishTime": "00:29:08.000",
        "site_ID": "108"
    },
    {
        "startTime": "00:29:08.000",
        "finishTime": "00:29:21.000",
        "site_ID": "109"
    },
    {
        "startTime": "00:29:21.000",
        "finishTime": "00:29:33.000",
        "site_ID": "110"
    },
    {
        "startTime": "00:29:33.000",
        "finishTime": "00:29:46.000",
        "site_ID": "111"
    },
    {
        "startTime": "00:29:46.000",
        "finishTime": "00:29:59.000",
        "site_ID": "112"
    },
    {
        "startTime": "00:29:59.000",
        "finishTime": "00:30:11.000",
        "site_ID": "113"
    },
    {
        "startTime": "00:30:11.000",
        "finishTime": "00:30:22.000",
        "site_ID": "114"
    },
    {
        "startTime": "00:30:22.000",
        "finishTime": "00:30:30.000",
        "site_ID": "115"
    },
    {
        "startTime": "00:30:30.000",
        "finishTime": "00:30:43.000",
        "site_ID": "116"
    },
    {
        "startTime": "00:30:43.000",
        "finishTime": "00:31:03.000",
        "site_ID": "117"
    },
    {
        "startTime": "00:31:03.000",
        "finishTime": "00:31:16.000",
        "site_ID": "118"
    },
    {
        "startTime": "00:31:16.000",
        "finishTime": "00:31:27.000",
        "site_ID": "119"
    },
    {
        "startTime": "00:31:27.000",
        "finishTime": "00:31:43.000",
        "site_ID": "120"
    },
    {
        "startTime": "00:31:43.000",
        "finishTime": "00:31:58.000",
        "site_ID": "121"
    },
    {
        "startTime": "00:31:58.000",
        "finishTime": "00:32:12.000",
        "site_ID": "122"
    },
    {
        "startTime": "00:32:12.000",
        "finishTime": "00:32:28.000",
        "site_ID": "123"
    },
    {
        "startTime": "00:32:28.000",
        "finishTime": "00:32:39.000",
        "site_ID": "124"
    },
    {
        "startTime": "00:32:39.000",
        "finishTime": "00:32:56.000",
        "site_ID": "125"
    },
    {
        "startTime": "00:32:56.000",
        "finishTime": "00:33:08.000",
        "site_ID": "126"
    },
    {
        "startTime": "00:33:08.000",
        "finishTime": "00:33:23.000",
        "site_ID": "127"
    },
    {
        "startTime": "00:33:23.000",
        "finishTime": "00:33:33.000",
        "site_ID": "128"
    },
    {
        "startTime": "00:33:33.000",
        "finishTime": "00:33:52.000",
        "site_ID": "129"
    },
    {
        "startTime": "00:33:52.000",
        "finishTime": "00:34:04.000",
        "site_ID": "130"
    },
    {
        "startTime": "00:34:04.000",
        "finishTime": "00:34:15.000",
        "site_ID": "131"
    },
    {
        "startTime": "00:34:15.000",
        "finishTime": "00:34:27.000",
        "site_ID": "132"
    },
    {
        "startTime": "00:34:27.000",
        "finishTime": "00:34:50.000",
        "site_ID": "133"
    },
    {
        "startTime": "00:34:50.000",
        "finishTime": "00:35:05.000",
        "site_ID": "134"
    },
    {
        "startTime": "00:35:05.000",
        "finishTime": "00:35:19.000",
        "site_ID": "135"
    },
    {
        "startTime": "00:35:19.000",
        "finishTime": "00:35:31.000",
        "site_ID": "136"
    },
    {
        "startTime": "00:35:31.000",
        "finishTime": "00:35:39.000",
        "site_ID": "137"
    },
    {
        "startTime": "00:35:39.000",
        "finishTime": "00:35:52.000",
        "site_ID": "138"
    },
    {
        "startTime": "00:35:52.000",
        "finishTime": "00:36:04.000",
        "site_ID": "139"
    },
    {
        "startTime": "00:36:04.000",
        "finishTime": "00:36:25.000",
        "site_ID": "140"
    },
    {
        "startTime": "00:36:25.000",
        "finishTime": "00:36:35.000",
        "site_ID": "141"
    },
    {
        "startTime": "00:36:35.000",
        "finishTime": "00:36:47.000",
        "site_ID": "142"
    },
    {
        "startTime": "00:36:47.000",
        "finishTime": "00:37:02.000",
        "site_ID": "143"
    },
    {
        "startTime": "00:37:02.000",
        "finishTime": "00:37:12.000",
        "site_ID": "144"
    },
    {
        "startTime": "00:37:12.000",
        "finishTime": "00:37:24.000",
        "site_ID": "145"
    },
    {
        "startTime": "00:37:24.000",
        "finishTime": "00:37:48.000",
        "site_ID": "146"
    },
    {
        "startTime": "00:37:48.000",
        "finishTime": "00:38:30.000",
        "site_ID": "147"
    },
    {
        "startTime": "00:38:30.000",
        "finishTime": "00:38:44.000",
        "site_ID": "148"
    },
    {
        "startTime": "00:38:44.000",
        "finishTime": "00:38:55.000",
        "site_ID": "149"
    },
    {
        "startTime": "00:38:55.000",
        "finishTime": "00:39:16.000",
        "site_ID": "150"
    },
    {
        "startTime": "00:39:16.000",
        "finishTime": "00:39:26.000",
        "site_ID": "151"
    },
    {
        "startTime": "00:39:26.000",
        "finishTime": "00:39:39.000",
        "site_ID": "152"
    },
    {
        "startTime": "00:39:39.000",
        "finishTime": "00:39:52.000",
        "site_ID": "153"
    },
    {
        "startTime": "00:39:52.000",
        "finishTime": "00:40:02.000",
        "site_ID": "154"
    },
    {
        "startTime": "00:40:02.000",
        "finishTime": "00:40:14.000",
        "site_ID": "155"
    },
    {
        "startTime": "00:40:14.000",
        "finishTime": "00:40:23.000",
        "site_ID": "156"
    },
    {
        "startTime": "00:40:23.000",
        "finishTime": "00:40:37.000",
        "site_ID": "157"
    },
    {
        "startTime": "00:40:37.000",
        "finishTime": "00:40:50.000",
        "site_ID": "158"
    },
    {
        "startTime": "00:40:50.000",
        "finishTime": "00:41:06.000",
        "site_ID": "159"
    },
    {
        "startTime": "00:41:06.000",
        "finishTime": "00:41:17.000",
        "site_ID": "160"
    },
    {
        "startTime": "00:41:17.000",
        "finishTime": "00:41:35.000",
        "site_ID": "161"
    },
    {
        "startTime": "00:41:35.000",
        "finishTime": "00:41:49.000",
        "site_ID": "162"
    },
    {
        "startTime": "00:41:49.000",
        "finishTime": "00:42:02.000",
        "site_ID": "163"
    },
    {
        "startTime": "00:42:02.000",
        "finishTime": "00:42:17.000",
        "site_ID": "164"
    },
    {
        "startTime": "00:42:17.000",
        "finishTime": "00:42:33.000",
        "site_ID": "165"
    },
    {
        "startTime": "00:42:33.000",
        "finishTime": "00:43:09.000",
        "site_ID": "166"
    },
    {
        "startTime": "00:43:09.000",
        "finishTime": "00:43:25.000",
        "site_ID": "167"
    },
    {
        "startTime": "00:43:25.000",
        "finishTime": "00:43:39.000",
        "site_ID": "168"
    },
    {
        "startTime": "00:43:39.000",
        "finishTime": "00:43:46.000",
        "site_ID": "169"
    },
    {
        "startTime": "00:43:46.000",
        "finishTime": "00:44:06.000",
        "site_ID": "170"
    },
    {
        "startTime": "00:44:06.000",
        "finishTime": "00:44:22.000",
        "site_ID": "171"
    },
    {
        "startTime": "00:44:22.000",
        "finishTime": "00:44:35.000",
        "site_ID": "172"
    },
    {
        "startTime": "00:44:35.000",
        "finishTime": "00:44:44.000",
        "site_ID": "173"
    },
    {
        "startTime": "00:44:44.000",
        "finishTime": "00:44:54.000",
        "site_ID": "174"
    },
    {
        "startTime": "00:44:54.000",
        "finishTime": "00:45:05.000",
        "site_ID": "175"
    },
    {
        "startTime": "00:45:05.000",
        "finishTime": "00:45:27.000",
        "site_ID": "176"
    },
    {
        "startTime": "00:45:27.000",
        "finishTime": "00:45:38.000",
        "site_ID": "177"
    },
    {
        "startTime": "00:45:38.000",
        "finishTime": "00:46:03.000",
        "site_ID": "178"
    },
    {
        "startTime": "00:46:03.000",
        "finishTime": "00:46:29.000",
        "site_ID": "179"
    },
    {
        "startTime": "00:46:29.000",
        "finishTime": "00:46:37.000",
        "site_ID": "180"
    },
    {
        "startTime": "00:46:37.000",
        "finishTime": "00:46:47.000",
        "site_ID": "181"
    },
    {
        "startTime": "00:46:47.000",
        "finishTime": "00:46:55.000",
        "site_ID": "182"
    },
    {
        "startTime": "00:46:55.000",
        "finishTime": "00:47:03.000",
        "site_ID": "183"
    },
    {
        "startTime": "00:47:03.000",
        "finishTime": "00:47:11.000",
        "site_ID": "184"
    },
    {
        "startTime": "00:47:11.000",
        "finishTime": "00:47:23.000",
        "site_ID": "185"
    },
    {
        "startTime": "00:47:23.000",
        "finishTime": "00:47:34.000",
        "site_ID": "186"
    },
    {
        "startTime": "00:47:34.000",
        "finishTime": "00:47:42.000",
        "site_ID": "187"
    },
    {
        "startTime": "00:47:42.000",
        "finishTime": "00:47:51.000",
        "site_ID": "188"
    },
    {
        "startTime": "00:47:51.000",
        "finishTime": "00:47:59.000",
        "site_ID": "189"
    },
    {
        "startTime": "00:47:59.000",
        "finishTime": "00:48:24.000",
        "site_ID": "190"
    },
    {
        "startTime": "00:48:24.000",
        "finishTime": "00:48:37.000",
        "site_ID": "191"
    },
    {
        "startTime": "00:48:37.000",
        "finishTime": "00:48:50.000",
        "site_ID": "192"
    },
    {
        "startTime": "00:48:50.000",
        "finishTime": "00:49:06.000",
        "site_ID": "193"
    },
    {
        "startTime": "00:49:06.000",
        "finishTime": "00:49:28.000",
        "site_ID": "194"
    },
    {
        "startTime": "00:49:28.000",
        "finishTime": "00:50:24.000",
        "site_ID": "195"
    },
    {
        "startTime": "00:50:24.000",
        "finishTime": "00:50:43.000",
        "site_ID": "196"
    },
    {
        "startTime": "00:50:43.000",
        "finishTime": "00:50:57.000",
        "site_ID": "197"
    },
    {
        "startTime": "00:50:57.000",
        "finishTime": "00:51:12.000",
        "site_ID": "198"
    },
    {
        "startTime": "00:51:12.000",
        "finishTime": "00:51:26.000",
        "site_ID": "199"
    },
    {
        "startTime": "00:51:26.000",
        "finishTime": "00:51:45.000",
        "site_ID": "200"
    },
    {
        "startTime": "00:51:45.000",
        "finishTime": "00:52:22.000",
        "site_ID": "201"
    },
    {
        "startTime": "00:52:22.000",
        "finishTime": "00:52:47.000",
        "site_ID": "202"
    },
    {
        "startTime": "00:52:47.000",
        "finishTime": "00:52:58.000",
        "site_ID": "203"
    },
    {
        "startTime": "00:52:58.000",
        "finishTime": "00:53:08.000",
        "site_ID": "204"
    },
    {
        "startTime": "00:53:08.000",
        "finishTime": "00:53:22.000",
        "site_ID": "205"
    },
    {
        "startTime": "00:53:22.000",
        "finishTime": "00:53:36.000",
        "site_ID": "206"
    },
    {
        "startTime": "00:53:36.000",
        "finishTime": "00:53:52.000",
        "site_ID": "207"
    },
    {
        "startTime": "00:53:52.000",
        "finishTime": "00:54:00.000",
        "site_ID": "208"
    },
    {
        "startTime": "00:54:00.000",
        "finishTime": "00:54:18.000",
        "site_ID": "209"
    },
    {
        "startTime": "00:54:18.000",
        "finishTime": "00:54:32.000",
        "site_ID": "210"
    },
    {
        "startTime": "00:54:32.000",
        "finishTime": "00:54:46.000",
        "site_ID": "211"
    },
    {
        "startTime": "00:54:46.000",
        "finishTime": "00:54:55.000",
        "site_ID": "212"
    },
    {
        "startTime": "00:54:55.000",
        "finishTime": "00:55:04.000",
        "site_ID": "213"
    },
    {
        "startTime": "00:55:04.000",
        "finishTime": "00:55:17.000",
        "site_ID": "214"
    },
    {
        "startTime": "00:55:17.000",
        "finishTime": "00:55:25.000",
        "site_ID": "215"
    },
    {
        "startTime": "00:55:25.000",
        "finishTime": "00:55:35.000",
        "site_ID": "216"
    },
    {
        "startTime": "00:55:35.000",
        "finishTime": "00:55:48.000",
        "site_ID": "217"
    },
    {
        "startTime": "00:55:48.000",
        "finishTime": "00:56:03.000",
        "site_ID": "218"
    },
    {
        "startTime": "00:56:03.000",
        "finishTime": "00:56:26.000",
        "site_ID": "219"
    },
    {
        "startTime": "00:56:26.000",
        "finishTime": "00:56:37.000",
        "site_ID": "220"
    },
    {
        "startTime": "00:56:37.000",
        "finishTime": "00:56:50.000",
        "site_ID": "221"
    },
    {
        "startTime": "00:56:50.000",
        "finishTime": "00:57:01.000",
        "site_ID": "222"
    },
    {
        "startTime": "00:57:01.000",
        "finishTime": "00:57:09.000",
        "site_ID": "223"
    },
    {
        "startTime": "00:57:09.000",
        "finishTime": "00:57:26.000",
        "site_ID": "224"
    },
    {
        "startTime": "00:57:26.000",
        "finishTime": "00:57:39.000",
        "site_ID": "225"
    },
    {
        "startTime": "00:57:39.000",
        "finishTime": "00:57:50.000",
        "site_ID": "226"
    },
    {
        "startTime": "00:57:50.000",
        "finishTime": "00:58:02.000",
        "site_ID": "227"
    },
    {
        "startTime": "00:58:02.000",
        "finishTime": "00:58:16.000",
        "site_ID": "228"
    },
    {
        "startTime": "00:58:16.000",
        "finishTime": "00:58:26.000",
        "site_ID": "229"
    },
    {
        "startTime": "00:58:26.000",
        "finishTime": "00:58:34.000",
        "site_ID": "230"
    },
    {
        "startTime": "00:58:34.000",
        "finishTime": "00:58:48.000",
        "site_ID": "231"
    },
    {
        "startTime": "00:58:48.000",
        "finishTime": "00:58:57.000",
        "site_ID": "232"
    },
    {
        "startTime": "00:58:57.000",
        "finishTime": "00:59:08.000",
        "site_ID": "233"
    },
    {
        "startTime": "00:59:08.000",
        "finishTime": "00:59:22.000",
        "site_ID": "234"
    },
    {
        "startTime": "00:59:22.000",
        "finishTime": "00:59:33.000",
        "site_ID": "235"
    },
    {
        "startTime": "00:59:33.000",
        "finishTime": "00:59:40.000",
        "site_ID": "236"
    },
    {
        "startTime": "00:59:40.000",
        "finishTime": "00:59:48.000",
        "site_ID": "237"
    },
    {
        "startTime": "00:59:48.000",
        "finishTime": "00:59:59.000",
        "site_ID": "238"
    },
    {
        "startTime": "00:59:59.000",
        "finishTime": "00:00:07.000",
        "site_ID": "239"
    },
    {
        "startTime": "01:00:07.000",
        "finishTime": "01:00:24.000",
        "site_ID": "240"
    },
    {
        "startTime": "01:00:24.000",
        "finishTime": "01:00:33.000",
        "site_ID": "241"
    },
    {
        "startTime": "01:00:33.000",
        "finishTime": "01:00:42.000",
        "site_ID": "242"
    },
    {
        "startTime": "01:00:42.000",
        "finishTime": "01:00:51.000",
        "site_ID": "243"
    },
    {
        "startTime": "01:00:51.000",
        "finishTime": "01:00:59.000",
        "site_ID": "244"
    },
    {
        "startTime": "01:00:59.000",
        "finishTime": "01:01:11.000",
        "site_ID": "245"
    },
    {
        "startTime": "01:01:11.000",
        "finishTime": "01:01:20.000",
        "site_ID": "246"
    },
    {
        "startTime": "01:01:20.000",
        "finishTime": "01:01:33.000",
        "site_ID": "247"
    },
    {
        "startTime": "01:01:33.000",
        "finishTime": "01:01:52.000",
        "site_ID": "248"
    },
    {
        "startTime": "01:01:52.000",
        "finishTime": "01:02:03.000",
        "site_ID": "249"
    },
    {
        "startTime": "01:02:03.000",
        "finishTime": "01:02:14.000",
        "site_ID": "250"
    },
    {
        "startTime": "01:02:14.000",
        "finishTime": "01:02:28.000",
        "site_ID": "251"
    },
    {
        "startTime": "01:02:28.000",
        "finishTime": "01:02:40.000",
        "site_ID": "252"
    },
    {
        "startTime": "01:02:40.000",
        "finishTime": "01:02:52.000",
        "site_ID": "253"
    },
    {
        "startTime": "01:02:52.000",
        "finishTime": "01:03:04.000",
        "site_ID": "254"
    },
    {
        "startTime": "01:03:04.000",
        "finishTime": "01:03:18.000",
        "site_ID": "255"
    },
    {
        "startTime": "01:03:18.000",
        "finishTime": "01:03:31.000",
        "site_ID": "256"
    },
    {
        "startTime": "01:03:31.000",
        "finishTime": "01:03:42.000",
        "site_ID": "257"
    },
    {
        "startTime": "01:03:42.000",
        "finishTime": "01:03:52.000",
        "site_ID": "258"
    },
    {
        "startTime": "01:03:52.000",
        "finishTime": "01:04:04.000",
        "site_ID": "259"
    },
    {
        "startTime": "01:04:04.000",
        "finishTime": "01:04:14.000",
        "site_ID": "260"
    },
    {
        "startTime": "01:04:14.000",
        "finishTime": "01:04:23.000",
        "site_ID": "261"
    },
    {
        "startTime": "01:04:23.000",
        "finishTime": "01:04:33.000",
        "site_ID": "262"
    },
    {
        "startTime": "01:04:33.000",
        "finishTime": "01:04:41.000",
        "site_ID": "263"
    },
    {
        "startTime": "01:04:41.000",
        "finishTime": "01:04:50.000",
        "site_ID": "264"
    },
    {
        "startTime": "01:04:50.000",
        "finishTime": "01:05:02.000",
        "site_ID": "265"
    },
    {
        "startTime": "01:05:02.000",
        "finishTime": "01:05:12.000",
        "site_ID": "266"
    },
    {
        "startTime": "01:05:12.000",
        "finishTime": "01:05:20.000",
        "site_ID": "267"
    },
    {
        "startTime": "01:05:20.000",
        "finishTime": "01:05:28.000",
        "site_ID": "268"
    },
    {
        "startTime": "01:05:28.000",
        "finishTime": "01:05:36.000",
        "site_ID": "269"
    },
    {
        "startTime": "01:05:36.000",
        "finishTime": "01:05:43.000",
        "site_ID": "270"
    },
    {
        "startTime": "01:05:43.000",
        "finishTime": "01:05:53.000",
        "site_ID": "271"
    },
    {
        "startTime": "01:05:53.000",
        "finishTime": "01:06:08.000",
        "site_ID": "272"
    },
    {
        "startTime": "01:06:08.000",
        "finishTime": "01:06:18.000",
        "site_ID": "273"
    },
    {
        "startTime": "01:06:18.000",
        "finishTime": "01:06:34.000",
        "site_ID": "274"
    },
    {
        "startTime": "01:06:34.000",
        "finishTime": "01:06:44.000",
        "site_ID": "275"
    },
    {
        "startTime": "01:06:44.000",
        "finishTime": "01:06:55.000",
        "site_ID": "276"
    },
    {
        "startTime": "01:06:55.000",
        "finishTime": "01:07:08.000",
        "site_ID": "277"
    },
    {
        "startTime": "01:07:08.000",
        "finishTime": "01:07:21.000",
        "site_ID": "278"
    },
    {
        "startTime": "01:07:21.000",
        "finishTime": "01:07:31.000",
        "site_ID": "279"
    },
    {
        "startTime": "01:07:31.000",
        "finishTime": "01:07:46.000",
        "site_ID": "280"
    },
    {
        "startTime": "01:07:46.000",
        "finishTime": "01:08:02.000",
        "site_ID": "281"
    },
    {
        "startTime": "01:08:02.000",
        "finishTime": "01:08:14.000",
        "site_ID": "282"
    },
    {
        "startTime": "01:08:14.000",
        "finishTime": "01:08:25.000",
        "site_ID": "283"
    },
    {
        "startTime": "01:08:25.000",
        "finishTime": "01:08:42.000",
        "site_ID": "284"
    },
    {
        "startTime": "01:08:42.000",
        "finishTime": "01:09:01.000",
        "site_ID": "285"
    },
    {
        "startTime": "01:09:01.000",
        "finishTime": "01:09:12.000",
        "site_ID": "286"
    },
    {
        "startTime": "01:09:12.000",
        "finishTime": "01:09:26.000",
        "site_ID": "287"
    },
    {
        "startTime": "01:09:26.000",
        "finishTime": "01:09:43.000",
        "site_ID": "288"
    },
    {
        "startTime": "01:09:43.000",
        "finishTime": "01:09:57.000",
        "site_ID": "289"
    },
    {
        "startTime": "01:09:57.000",
        "finishTime": "01:10:08.000",
        "site_ID": "290"
    },
    {
        "startTime": "01:10:08.000",
        "finishTime": "01:10:26.000",
        "site_ID": "291"
    },
    {
        "startTime": "01:10:26.000",
        "finishTime": "01:10:44.000",
        "site_ID": "292"
    },
    {
        "startTime": "01:10:44.000",
        "finishTime": "01:10:56.000",
        "site_ID": "293"
    },
    {
        "startTime": "01:10:56.000",
        "finishTime": "01:11:13.000",
        "site_ID": "294"
    }
]
# def AddDescription():
#     for item in Skema_List:
#         item.update({"Description": ""})

#     with open("sample.json", "w") as outfile: 
#         json.dump(Skema_List, outfile)

# AddDescription()

def AddAttribute(attributeName):

    for item in Skema_List:
        item.update({f"{attributeName}": []})

# Add a timestamp 

    with open("AddElement_Output.json", "w") as outfile: 
        json.dump(Skema_List, outfile)

AddAttribute("Caption")