
CREATE TABLE `floor` (
  `floor_index` int(11) NOT NULL,
  `floor_name` varchar(50) NOT NULL,
  `placeid` int(11) NOT NULL,
  `beacon_loc` text NOT NULL,
  `image_url` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;