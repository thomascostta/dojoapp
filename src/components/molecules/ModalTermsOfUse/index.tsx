import ReactNativeModal from "react-native-modal";
import {
  Container,
  Content,
  ContentButton,
  ButtonClose,
  ContentScroll,
  Scroll,
  ContentCheckbox,
} from "./styles";
import { LabelText } from "../../atoms/LabelText";
import { CheckoutTermsUse } from "../CheckoutTermsUse";

export interface IModalTermsOfUseProps {
  onPressButton: () => void;
  isVisible: boolean;
  isAvoidCloseOnBackdropPress?: boolean;
  onClose?: () => void;
}

export function ModalTermsOfUse({
  onPressButton,
  isVisible,
  isAvoidCloseOnBackdropPress,
  onClose = () => null,
}: IModalTermsOfUseProps) {
  const textTermsOfUse =
    "Termos e condições gerais de uso (e de compra e venda) do OU site ___ OU aplicativo ____\n\n\nOs serviços do _____ são fornecidos pela pessoa jurídica OU física com a seguinte Razão Social/nome: ____, com nome fantasia ___, inscrito no CNPJ/CPF sob o nº ___, titular da propriedade intelectual sobre software, website, aplicativos, conteúdos e demais ativos relacionados à plataforma ______.\n\n\n1. Do objeto\n\nA plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.\n\nA plataforma caracteriza-se pela prestação do seguinte serviço: _____.\n\nA plataforma realiza a venda à distância por meio eletrônico dos seguintes produtos ou serviços: _______.\n\n\n2. Da aceitação\n\nO presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuárias do OU site OU aplicativo.\n\nAo utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidade cabíveis.\n\nA aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela empresa. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.\n\n\n3. Do acesso dos usuários\n\nSerão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.\n\n\n(Se há necessidade de cadastro para uso da plataforma)\n\n4. Do cadastro\n\nO acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio e, a depender dos serviços ou produtos escolhidos, o pagamento de determinado valor.\n\nAo se cadastrar o usuário deverá informar dados completos, recentes e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a veracidade dos dados fornecidos.\n\nO usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.\n\nMenores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma e dos serviços ou produtos, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização.\n\nMediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos serviços e produtos.\n\nO usuário deverá fornecer um endereço de e-mail válido, através do qual o site realizará todas comunicações necessárias.';";

  return (
    <Container>
      <ReactNativeModal
        testID="ModalID"
        style={{
          margin: 0,
          justifyContent: "flex-end",
        }}
        isVisible={isVisible}
        onBackButtonPress={onClose}
        onBackdropPress={isAvoidCloseOnBackdropPress ? () => null : onClose}
        onSwipeComplete={onClose}
        backdropTransitionOutTiming={0}
        backdropOpacity={0.4}
      >
        <Content>
          <ContentButton>
            <ButtonClose onPress={onClose} />
          </ContentButton>
          <ContentScroll>
            <Scroll>
              <LabelText text={textTermsOfUse} />
            </Scroll>
          </ContentScroll>
          <ContentCheckbox>
            <CheckoutTermsUse onPressButton={onPressButton} />
          </ContentCheckbox>
        </Content>
      </ReactNativeModal>
    </Container>
  );
}
