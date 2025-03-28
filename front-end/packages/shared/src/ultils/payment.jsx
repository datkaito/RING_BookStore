import styled from "@emotion/styled";
import {
  BookOnline,
  CreditCard,
  LocalAtm,
  Payments,
  QrCode2,
} from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  Grid2 as Grid,
  TextField,
} from "@mui/material";

//#region styled
const Message = styled.span`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 14px;
  }
`;

const Title = styled.h4`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  margin-top: 0;
  font-weight: 420;
`;

const CardContainer = styled.div`
  border: 0.5px solid ${({ theme }) => theme.palette.info.dark};
  padding: ${({ theme }) => theme.spacing(1)};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.palette.info.light};
  }
`;

const CardTitle = styled.span`
  font-size: 18px;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.palette.info.main};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 14px;
  }
`;

const CardDeal = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: ${({ theme }) => theme.spacing(1)} 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`;

const ScanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//#endregion

export const getPaymentContent = (method) => {
  switch (method) {
    case "CASH":
      return (
        <>
          <Title>THANH TOÁN KHI NHẬN HÀNG</Title>
          <Message>
            Tiền mặt: &emsp;Phí thu hộ: 0đ. Ưu đãi về phí vận chuyển (nếu có) áp
            dụng cả với phí thu hộ.
          </Message>
        </>
      );
    case "CREDIT_CARD":
      return (
        <>
          <Title>THANH TOÁN QUỐC TẾ</Title>
          <Grid container size="grow" sx={{ maxWidth: "500px" }} spacing={1}>
            <Grid container size={12} spacing={1}>
              <Grid size={12}>
                <TextField
                  placeholder="Số thẻ"
                  required
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  placeholder="Tên chủ thẻ"
                  required
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container size={12} spacing={1}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  placeholder="Ngày hết hạn"
                  required
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField placeholder="CCV" required size="small" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <FormControlLabel
            sx={{ mt: 1 }}
            control={<Checkbox />}
            label="Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật."
          />
        </>
      );
    case "DEBIT_CARD":
      return (
        <>
          <Title>THANH TOÁN THẺ ATM</Title>
          <Message>Chọn thẻ</Message>
          <Grid container size="grow" sx={{ my: 1 }} spacing={1}>
            {[...Array(12)].map((item, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <CardContainer>
                  <CardTitle>
                    Ngân hàng: ABC
                    <CreditCard />
                  </CardTitle>
                  <CardDeal>Giảm 0đ cho đơn từ 0đ</CardDeal>
                </CardContainer>
              </Grid>
            ))}
          </Grid>
        </>
      );
    case "ONLINE_PAYMENT":
      return (
        <>
          <Title>THANH TOÁN ONLINE</Title>
          <ScanContainer>
            <Message>Quét mã để thanh toán</Message>
            <img
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/485140117_2744473149073414_8171773848424116192_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhvGdG62vABkj9KNaWN0boYrzr5HbXjGNivOvkdteMY9kSDiF7_dCT3M5HrCrKioTg5256kj31InsxNkRV7aFb&_nc_ohc=0KdUNk715VMQ7kNvgHXS6mH&_nc_oc=AdhH_59lCWXthBHEzsLQRaWz_0cFWixyFIAuPra8eNfgnpDkeNTObYcDonX94C5-_5Dnoqq5fuyldA4ErO1MX9KN&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=bmF6IK16z-aO6876nwzqJA&oh=00_AYEPoJzcIjwRTVyb22iwbL0xVm0Q5XbwObtkOFiv5MPD9w&oe=67DF23BB"
              alt="QR Code"
              style={{ width: "300px", height: "300px" }}
            />
          </ScanContainer>
        </>
      );
  }
};

export const paymentType = [
  "CASH",
  "CREDIT_CARD",
  "DEBIT_CARD",
  "ONLINE_PAYMENT",
];

export const paymentTypes = {
  CASH: {
    label: "Thanh toán tiền mặt",
    description: "",
    icon: <LocalAtm />,
  },
  CREDIT_CARD: {
    label: "Thẻ tín dụng",
    description: "",
    icon: <CreditCard />,
  },
  DEBIT_CARD: {
    label: "Thẻ ATM",
    description: "Hỗ trợ Internet Banking",
    icon: <Payments />,
  },
  ONLINE_PAYMENT: {
    label: "Ví Online",
    description: "Quét Mã QR từ ứng dụng",
    icon: <BookOnline />,
  },
};

export const paymentItems = [
  {
    value: "CASH",
    label: "Thanh toán tiền mặt",
    description: "",
    icon: <LocalAtm />,
  },
  {
    value: "CREDIT_CARD",
    label: "Thẻ tín dụng",
    description: "",
    icon: <CreditCard />,
  },
  {
    value: "DEBIT_CARD",
    label: "Thẻ ATM",
    description: "Hỗ trợ Internet Banking",
    icon: <Payments />,
  },
  {
    value: "ONLINE_PAYMENT",
    label: "Ví Online",
    description: "Quét Mã QR từ ứng dụng",
    icon: <BookOnline />,
  },
];
