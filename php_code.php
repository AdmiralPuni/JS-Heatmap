<div class="outer" style="position:absolute;">
    <?php
        $img_url;
        $beacon_location;
        $floor_name;
        //get floor info from database
        if (!empty($floor_detail)) {
            foreach ($floor_detail as $data) {
                $img_url = $data->image_url;
                $beacon_location = $data->beacon_loc;
                $floor_name = $data->floor_name;
            }
        }
        $width = 1000; //picture width
        $height = ((3 / 4) * $width); //picture height
        $gridw = $width / 10; //width per grid
        $gridh = $height / 10; //width per height
        for ($i = 1; $i <= 10; $i++) { //generate width, id used as coordinate of the grid x and y
            for ($k = 1; $k <= 10; $k++) {
                echo '<div class="grid heatlvl0" id="x' . $k . 'y' . $i . '" style="width:' . $gridw . 'px;height:' . $gridh . 'px">' . $k . ',' . $i . '</div>';
            }
            echo '<br>';
        }
    ?>
</div>
<img src="<?=$img_url ?>" class="img-cus" alt="Responsive image">