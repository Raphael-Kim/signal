    {/*
      <View style={styles.tag}>
      <Text style={styles.tagTitle}>
        2. 태그
        </Text>
      {
        this.state.useTags === false 
        ? (
        <TouchableOpacity
          style={styles.tagInputSwitch}
          onPress={() => {
          this.textInputRef.blur(); // keyboard dismiss
          this.setState({useTags: true});}}
        >
          <Text style={styles.tagInputSwitchText}>
          사용하기
          </Text>
        </TouchableOpacity>
        ) : (
        <ScrollView
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{
            this.scrollView.scrollToEnd({animated: true});
          }}
          >
          <Tags
          // initialText=""
          textInputProps={{
            // placeholder: "Any type of animal",
            // placeholderTextColor: 'white'
          }}
          initialTags={ this.state.tags }
          createTagOnString={[",", ".", " "]}
          onChangeTags={ tags => {this.setState({ tags })}}
          containerStyle={{paddingHorizontal: 20}}
          inputStyle={styles.customInputStyle}
          renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
            <TouchableOpacity 
            key={`${tag}-${index}`} 
            onPress={onPress}
            style={styles.customRenderTagStyle}
            >
            <Text style={styles.customRenderTagStyleText}>
              {tag}
            </Text>
            </TouchableOpacity>
          )}
          /> 
            
        </ScrollView>
        )
      }
      </View>
    */}


    {/*
      <TextInput
        ref={(ref) => this.textInputRef = ref}
        style={{fontSize: 17, textAlignVertical: 'center'}}
        onChangeText={(text) => {this.setState({answerText: text});}}
        value={this.state.answerText}
        placeholder={'답변을 적어주세요.'}
        placeholderTextColor={'grey'}
        autoFocus={true}
        // maxLength={30}
        multiline={true}
      />
    */}
    {/*
      <Text onPress={() => { this.setState({ value: "" }) }}>
        Clear textbox
      </Text>
    */}