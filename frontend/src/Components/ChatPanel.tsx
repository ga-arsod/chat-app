import { Avatar, Divider } from "@mui/material";
import style from "../Styles/ChatPanel.module.css";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'; 
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHoriz';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export const ChatPanel = () => {
  return (
    <div id={style.ChatPanel}>
      <div id={style.Header}>
        <div id={style.headerLeft}>
          <Avatar sx={{ width: 40, height: 40 }} src="/broken-image.jpg" />
          <h4>Gaurav Arsod</h4>
        </div>

        <div id={style.headerRight}>
          <VideocamOutlinedIcon/>
          <CallOutlinedIcon/>
          <MoreHorizOutlinedIcon/>
        </div>
      </div>
      <Divider variant="middle" />

      <div id={style.MessageContainer}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores soluta dolorum cum culpa, voluptas fugit numquam vero earum natus ad debitis dignissimos praesentium consequatur pariatur dolore, optio repellendus eaque fuga! Harum culpa veritatis, repellendus eos quia, neque animi vero dolorem veniam ea eveniet laborum magni natus repudiandae? Minima sapiente natus cupiditate temporibus dolore porro, impedit minus amet recusandae odit libero. Labore autem minima, ducimus nemo debitis, quis delectus temporibus non laudantium pariatur iusto ea doloribus eos atque vero voluptate corporis, saepe consectetur minus corrupti natus voluptatem aliquam! Aut perspiciatis qui dignissimos provident eligendi! Tempora necessitatibus illum voluptas accusantium vero fugit similique unde blanditiis obcaecati odit placeat id neque provident corporis quam mollitia quo dicta numquam suscipit, dolore vitae! Asperiores, nobis. Ex nulla, perspiciatis eius quia quibusdam ipsa non harum dolores! Beatae dolore minima quam aperiam eius possimus corporis quisquam ipsa fugit eaque, blanditiis in? Quos voluptatem, fuga voluptatum minus quo et ex temporibus dolores natus quisquam impedit, facere eaque iste quas eveniet consequuntur doloribus omnis ad magnam deleniti maiores distinctio rem eum! Veritatis nemo voluptatem debitis ullam temporibus unde quaerat libero consectetur, recusandae accusantium voluptates cupiditate, aperiam perferendis. Perspiciatis ut qui ad praesentium! Impedit sit nesciunt rerum sunt quasi esse rem nostrum veritatis, ducimus incidunt possimus maxime id exercitationem dicta atque sed officiis. Itaque voluptatem ipsa molestias impedit quasi perferendis atque laboriosam necessitatibus inventore pariatur, et dicta expedita nesciunt nobis, nostrum qui consequatur molestiae voluptatibus laudantium! Optio, quibusdam maxime placeat modi perspiciatis, dolorem, mollitia voluptas quidem quam necessitatibus iure sunt. Totam veniam fugiat velit nulla voluptatum id! Cumque molestiae possimus obcaecati voluptatum quae fuga atque maxime, architecto dolore cupiditate, esse blanditiis est labore, et debitis molestias modi eveniet dolorum veniam magni tempora fugit ex aut alias. Ullam, natus, ut quos placeat et asperiores ab debitis quas, consectetur perferendis nostrum praesentium dolorem explicabo consequatur veniam deserunt quia aliquam similique doloribus fuga quibusdam tenetur accusantium exercitationem? Hic, itaque ea labore, explicabo, ducimus tenetur vero doloribus fugiat maiores quisquam perspiciatis. Odio iste debitis, facere deserunt perspiciatis, id, quam dignissimos illum pariatur consequatur corrupti consectetur delectus? Consectetur placeat nam veritatis! Modi rerum eligendi aspernatur repellendus voluptate quos sequi, debitis, harum maxime soluta in quis libero exercitationem porro molestiae quas? Explicabo, maxime vero. Nobis laudantium eaque atque exercitationem molestias fuga possimus esse dolorem, aspernatur inventore, porro voluptas at asperiores ducimus nesciunt deserunt vero nulla. Dignissimos temporibus quibusdam libero tempora recusandae minus ducimus voluptas atque perspiciatis voluptatum, odio ex odit non reiciendis aliquid doloribus dolore est corporis quod in hic deserunt, laboriosam magnam ipsum. Accusantium recusandae ipsa dolore blanditiis quae aspernatur, odit nostrum ad error fuga praesentium labore earum ratione modi amet corrupti commodi sunt illo non ut dolorem quas repudiandae? Ullam possimus dolore cupiditate ab commodi modi eaque beatae numquam dignissimos culpa, labore, voluptatem asperiores. Sint dolores dolorem nam, inventore incidunt suscipit id eius dolorum omnis cum porro obcaecati. Impedit, deserunt adipisci nobis ipsa atque deleniti sapiente cum! Accusamus, labore est quaerat velit laudantium nostrum optio id voluptatibus veniam culpa. Eos laborum laudantium inventore vitae.
      </div>
      <Divider variant="middle" />

      <div id={style.Bottom}>
        <Paper
          component="form"
          sx={{ p: '1px 3px', display: 'flex', alignItems: 'center' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MicNoneOutlinedIcon />
          </IconButton>
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Type a message"
            inputProps={{ 'aria-label': 'type a message' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <AttachmentOutlinedIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <SentimentSatisfiedOutlinedIcon style={{color:"gray"}}/>
          </IconButton>
        </Paper>
      </div>
    </div>
  )
}
