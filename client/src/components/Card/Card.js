import './styles'
import { GreetingCard, MessageContainer, Greeting, MainHeader, SubHeader, Recipient, MessageContent } from './styles'

import christmasImg from '../../images/christmas.jpg';
import birthdayImg from '../../images/birthday.jpg'
import fathersDayImg from '../../images/fathers.jpg';
import mothersDay from '../../images/mothers.jpg';
import thankYou from '../../images/thank-you-bg.jpg';
import paperBg from '../../images/paperBg.jpg'

const font1 = `'Corinthia', cursive`
// const font2 = `'Fuzzy Bubbles', cursive`
const font3 = `'Abel', sans-serif`

const Card = ({ mainHeader, subHeader, cardInfo }) => {

    const getCardTemplate = (card) => {
        switch (card.holiday){
            case 'christmas':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : christmasImg }>
                        <MessageContainer color={"#0B5345"} messageBg={paperBg} marginSetting="3rem auto">
                            <MainHeader headerFont={font3}>Wishing you a </MainHeader>
                            <SubHeader subHeader={font1} fontSize='4rem'>
                                Merry Christmas
                            </SubHeader>
                            <Greeting>
                                Dear {card.recipientName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
                );
            case 'birthday':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : birthdayImg}>
                        <MessageContainer messageBg={paperBg} color="#BF9BCA">
                        <MainHeader headerFont={font3}>Wishing you a</MainHeader>
                            <SubHeader subHeader={font1} fontSize='4rem'>
                                Happy Birthday
                            </SubHeader>
                            <Greeting>
                                Dear {card.recipientName},
                            </Greeting>
                            <MessageContent>
                              {card.messageType === 'custom' ? card.customMessage : card.message}  
                            </MessageContent>
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'mothers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : mothersDay}>
                        <MessageContainer messageBg={paperBg} marginSetting="3rem 0" color="#DE7BC6">
                        <MainHeader headerFont={font3}>Wishing you a</MainHeader>
                            <SubHeader subHeader={font1} fontSize='3rem'>
                                Happy Mother's Day
                            </SubHeader>
                            <Greeting>
                                Dear {card.recipientName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'fathers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : fathersDayImg}>
                        <MessageContainer messageBg={paperBg} marginSetting="20rem auto 1rem" color="#923846">
                        <MainHeader headerFont={font3}>Wishing you a Happy</MainHeader>
                            <SubHeader subHeader={font1} fontSize="5rem">
                                Father's Day
                            </SubHeader>
                            <Greeting>
                                Dear {card.recipientName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'thank-you':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="12rem 0 3rem" color="#895C4B">
                        <MainHeader headerFont={font1} fontSize="5rem">I appreciate you</MainHeader>
                            <SubHeader>
                            {card.recipientName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'anniversary':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="12rem 0 3rem" color="#895C4B">
                        <MainHeader headerFont={font1} fontSize="5rem">Wishing you a Happy</MainHeader>
                            <SubHeader>
                            {card.recipientName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'wedding':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="12rem 0 3rem" color="#895C4B">
                        <MainHeader headerFont={font1} fontSize="5rem">Wishing you a Happy</MainHeader>
                            <SubHeader>
                            {card.recipientName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'graduation':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="12rem 0 3rem" color="#895C4B">
                        <MainHeader headerFont={font1} fontSize="5rem">Wishing you a Happy</MainHeader>
                            <SubHeader>
                            {card.recipientName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                            <Recipient>- {card.senderName}</Recipient>
                        </MessageContainer>
                    </GreetingCard>
            );
            default: 
            <div></div>
        }
    }
    return (
        <div style={{marginTop: '1rem'}}>
            {getCardTemplate(cardInfo)}
        </div>
        // <div className="card-container">
        //     <div className="content-wrapper">
        //         <div className="main-header">
        //             <h3>{mainHeader}</h3>
        //         </div>
        //         <div className="sub-header">
        //             <h1>{subHeader}</h1>
        //         </div>
        //         <div>
        //             <p>Hey {recipientName},</p>
        //         </div>
        //         <div className="greeting-message">
        //             {message}
        //         </div>
        //         <div className="sender-name">
        //             <p>- {senderName}</p>
        //         </div>
        //     </div>
        // </div> 
    )
}

export default Card;